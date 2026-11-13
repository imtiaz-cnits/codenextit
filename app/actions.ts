"use server";

import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import { 
  getBlogs, 
  saveBlogs, 
  getPortfolios, 
  savePortfolios, 
  BlogPost, 
  ProjectDetail 
} from '@/lib/db';

const SESSION_COOKIE_NAME = 'cnit_admin_session';
const ADMIN_PASSWORD = process.env.CNIT_ADMIN_PASSWORD || 'admin123';

// -------------------------------------------------------------
// Authentication Actions
// -------------------------------------------------------------

export async function loginAdmin(password: string) {
  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    });
    return { success: true, message: 'Logged in successfully' };
  }
  return { success: false, message: 'Invalid administrative password' };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  return { success: true };
}

export async function checkAdminSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return session?.value === 'authenticated';
}

// -------------------------------------------------------------
// Blog Management Actions
// -------------------------------------------------------------

export async function fetchBlogs() {
  return getBlogs();
}

export async function saveOrUpdateBlog(blogData: Omit<BlogPost, 'id'> & { id?: number }) {
  const isAdmin = await checkAdminSession();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const blogs = getBlogs();
  
  if (blogData.id) {
    // Edit Mode
    const index = blogs.findIndex(b => b.id === blogData.id);
    if (index !== -1) {
      blogs[index] = {
        ...blogs[index],
        title: blogData.title,
        excerpt: blogData.excerpt,
        content: blogData.content,
        category: blogData.category,
        author: blogData.author,
        readTime: blogData.readTime,
        image: blogData.image,
        featured: blogData.featured,
        date: blogData.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      };
      saveBlogs(blogs);
      return { success: true, blog: blogs[index] };
    }
    throw new Error('Blog post not found');
  } else {
    // Create Mode
    const newId = blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1;
    const newBlog: BlogPost = {
      id: newId,
      title: blogData.title,
      excerpt: blogData.excerpt,
      content: blogData.content,
      category: blogData.category,
      author: blogData.author,
      authorImage: `https://ui-avatars.com/api/?name=${encodeURIComponent(blogData.author)}&background=0062FF&color=fff`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: blogData.readTime || '5 min read',
      image: blogData.image || '/images/blog/featured.png',
      featured: blogData.featured || false
    };
    blogs.push(newBlog);
    saveBlogs(blogs);
    return { success: true, blog: newBlog };
  }
}

export async function deleteBlog(id: number) {
  const isAdmin = await checkAdminSession();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const blogs = getBlogs();
  const filtered = blogs.filter(b => b.id !== id);
  saveBlogs(filtered);
  return { success: true };
}

// -------------------------------------------------------------
// Portfolio Management Actions
// -------------------------------------------------------------

export async function fetchPortfolios() {
  const portfolios = getPortfolios();
  return portfolios.sort((a, b) => (b.id || 0) - (a.id || 0));
}

export async function saveOrUpdatePortfolio(portfolioData: ProjectDetail) {
  const isAdmin = await checkAdminSession();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const portfolios = getPortfolios();
  const slug = portfolioData.slug || portfolioData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  const existingIndex = portfolios.findIndex(p => p.slug === portfolioData.slug);
  
  const formattedPortfolio: ProjectDetail = {
    ...portfolioData,
    slug,
    title: portfolioData.title,
    client: portfolioData.client,
    category: portfolioData.category,
    year: portfolioData.year || new Date().getFullYear().toString(),
    mainImage: portfolioData.mainImage || '/images/Themes Jet.png',
    tags: portfolioData.tags || [],
    overview: portfolioData.overview || '',
    challenge: portfolioData.challenge || '',
    solution: portfolioData.solution || '',
    techStack: portfolioData.techStack || [],
    features: portfolioData.features || [],
    results: portfolioData.results || [],
    liveLink: portfolioData.liveLink || ''
  };

  if (existingIndex !== -1) {
    // Edit Mode
    portfolios[existingIndex] = formattedPortfolio;
    savePortfolios(portfolios);
    return { success: true, portfolio: formattedPortfolio };
  } else {
    // Create Mode
    const newId = portfolios.length > 0 ? Math.max(...portfolios.map(p => p.id || 0)) + 1 : 1;
    formattedPortfolio.id = newId;
    portfolios.push(formattedPortfolio);
    savePortfolios(portfolios);
    return { success: true, portfolio: formattedPortfolio };
  }
}

export async function deletePortfolio(slug: string) {
  const isAdmin = await checkAdminSession();
  if (!isAdmin) {
    throw new Error('Unauthorized');
  }

  const portfolios = getPortfolios();
  const filtered = portfolios.filter(p => p.slug !== slug);
  savePortfolios(filtered);
  return { success: true };
}

// -------------------------------------------------------------
// Sleek Image Upload Handler Action
// -------------------------------------------------------------

export async function uploadImage(formData: FormData) {
  try {
    const isAdmin = await checkAdminSession();
    if (!isAdmin) {
      return { success: false, error: 'Unauthorized: Admin session required.' };
    }

    const file = formData.get('file') as any;
    if (!file) {
      return { success: false, error: 'No file provided' };
    }

    let buffer: Buffer;
    if (typeof file.arrayBuffer === 'function') {
      const bytes = await file.arrayBuffer();
      buffer = Buffer.from(bytes);
    } else if (Buffer.isBuffer(file)) {
      buffer = file;
    } else if (file._buf) {
      buffer = file._buf;
    } else {
      return { success: false, error: 'Uploaded file format is not supported on this server.' };
    }

    // Path inside public folder
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Safe unique filename
    const cleanFileName = (file.name || 'uploaded_image').replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${Date.now()}-${cleanFileName}`;
    const filepath = path.join(uploadDir, filename);

    await fs.promises.writeFile(filepath, buffer);
    
    return { success: true, url: `/uploads/${filename}` };
  } catch (err: any) {
    console.error("Server uploadImage error:", err);
    return { success: false, error: err.message || 'Internal server error during upload.' };
  }
}
