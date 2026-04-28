export const CATEGORIES = ["All", "Web Development", "App Development", "AI & ML", "Cybersecurity", "UI/UX Design", "Digital Marketing"];

export const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2026",
        excerpt: "Explore the emerging technologies and frameworks that are shaping the future of web development, from AI-driven coding to edge computing.",
        content: `
<h2 class="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">Introduction</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">The web development landscape is evolving at an unprecedented pace. As we navigate through 2026, several key trends have shifted from experimental concepts to industry standards. This article explores the most significant trends that every developer should watch.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. AI-Driven Development</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Artificial Intelligence is no longer just a buzzword; it's deeply integrated into our development workflows. From intelligent code completion to automated testing and bug fixing, AI tools are making developers more productive than ever.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Edge Computing</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Moving computation closer to the source of data is revolutionizing how we build web applications. Edge computing drastically reduces latency, improves performance, and offers better security for distributed applications.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Serverless Architectures</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">The abstraction of servers continues to gain momentum. With platforms offering seamless scaling and reduced operational overhead, more companies are adopting serverless architectures for their primary applications.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Conclusion</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Staying ahead in web development requires continuous learning and adaptation. Embracing these trends will not only future-proof your skills but also enable you to build more robust and scalable applications.</p>
        `,
        category: "Web Development",
        author: "Imtiaz Ahmed",
        authorImage: "https://ui-avatars.com/api/?name=Imtiaz+Ahmed&background=0062FF&color=fff",
        date: "April 25, 2026",
        readTime: "8 min read",
        image: "/images/blog/featured.png",
        featured: true
    },
    {
        id: 2,
        title: "Mastering UI/UX: Creating Human-Centric Digital Experiences",
        excerpt: "Design is more than just aesthetics. Learn how to create interfaces that prioritize user needs and emotional connection.",
        content: `
<h2 class="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">The Core of Human-Centric Design</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">In 2026, user experience is the primary differentiator for digital products. Beautiful interfaces are common, but truly intuitive, human-centric experiences remain a challenge.</p>

<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Understanding Emotional Design</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Every interaction a user has with your product evokes an emotion. Whether it's the satisfaction of a fluid animation or the frustration of a confusing navigation menu, these emotional responses dictate user retention.</p>

<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Accessibility is Non-Negotiable</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Modern UI/UX design places accessibility at its core. Designing for all users, regardless of their abilities, is not just a legal requirement in many regions—it's a moral imperative and good business practice.</p>

<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Micro-Interactions Matter</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">The smallest details often make the biggest impact. Micro-interactions—like a subtle hover state or a satisfying toggle switch—provide immediate feedback and make digital spaces feel tactile and alive.</p>
        `,
        category: "UI/UX Design",
        author: "Sarah J.",
        authorImage: "https://ui-avatars.com/api/?name=Sarah+J&background=0062FF&color=fff",
        date: "April 22, 2026",
        readTime: "6 min read",
        image: "/images/blog/uiux.png",
        featured: false
    },
    {
        id: 3,
        title: "AI & ML in 2026: Beyond the Hype",
        excerpt: "How artificial intelligence is moving from experimental phases to core business infrastructures across industries.",
        content: `
<h2 class="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">Moving Past the Hype Cycle</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">We've passed the peak of inflated expectations regarding Artificial Intelligence. In 2026, the focus is purely on practical, scalable applications of Machine Learning models in everyday business operations.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Predictive Analytics</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Businesses are leveraging AI to predict market trends, customer behavior, and potential supply chain disruptions with unprecedented accuracy.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Natural Language Processing (NLP)</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Conversational interfaces have become practically indistinguishable from human operators. NLP has revolutionized customer support, content generation, and internal knowledge management.</p>
        `,
        category: "AI & ML",
        author: "Dr. Robert Chen",
        authorImage: "https://ui-avatars.com/api/?name=Robert+Chen&background=0062FF&color=fff",
        date: "April 18, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        featured: false
    },
    {
        id: 4,
        title: "Cybersecurity Essentials for Small Businesses",
        excerpt: "In an era of increasing digital threats, how small businesses can protect their data and build trust with customers.",
        content: `
<h2 class="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">The Growing Threat Landscape</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Small businesses are increasingly becoming targets for cyberattacks. Many operate under the false assumption that they are "too small to be noticed" by hackers.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Essential Security Measures</h3>
<ul class="list-disc pl-6 text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
    <li class="mb-2"><strong class="text-slate-900 dark:text-white">Multi-Factor Authentication (MFA)</strong>: A simple yet effective barrier against unauthorized access.</li>
    <li class="mb-2"><strong class="text-slate-900 dark:text-white">Regular Backups</strong>: Crucial for recovering from ransomware attacks without paying a ransom.</li>
    <li class="mb-2"><strong class="text-slate-900 dark:text-white">Employee Training</strong>: The human element remains the weakest link in any security system.</li>
</ul>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Zero Trust Architecture</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">The traditional "castle and moat" approach is dead. Adopting a Zero Trust model—where every request is verified regardless of its origin—is essential for modern business networks.</p>
        `,
        category: "Cybersecurity",
        author: "Michael K.",
        authorImage: "https://ui-avatars.com/api/?name=Michael+K&background=0062FF&color=fff",
        date: "April 15, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        featured: false
    },
    {
        id: 5,
        title: "Mobile App Development: Native vs. Cross-Platform",
        excerpt: "Which approach is right for your business in 2026? We weigh the pros and cons of Flutter, React Native, and Swift.",
        content: `
<h2 class="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">The Ongoing Debate</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">The choice between native and cross-platform mobile development is a crucial decision that impacts budget, timeline, and user experience.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">The Rise of Flutter</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Flutter continues to dominate the cross-platform space, offering near-native performance and a unified codebase for iOS, Android, and web.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">When Native is Still King</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">For applications requiring deep integration with device hardware, complex animations, or maximum performance (like gaming or AR), native development using Swift or Kotlin remains the superior choice.</p>
        `,
        category: "App Development",
        author: "Imtiaz Ahmed",
        authorImage: "https://ui-avatars.com/api/?name=Imtiaz+Ahmed&background=0062FF&color=fff",
        date: "April 10, 2026",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        featured: false
    },
    {
        id: 6,
        title: "Digital Marketing Strategies That Actually Convert",
        excerpt: "Moving beyond likes and shares—how to build a marketing funnel that drives real revenue growth.",
        content: `
<h2 class="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">Focusing on ROI</h2>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Vanity metrics like followers and likes are taking a backseat to tangible business outcomes. Modern digital marketing is entirely data-driven and focused on conversion.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Personalization at Scale</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Generic marketing campaigns are ignored. By leveraging data analytics, brands can deliver highly personalized content and offers to specific audience segments.</p>

<h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Video Content Dominance</h3>
<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Short-form, engaging video content continues to offer the highest ROI across all social platforms. It's the most effective way to capture attention in an increasingly crowded digital space.</p>
        `,
        category: "Digital Marketing",
        author: "Jessica Lee",
        authorImage: "https://ui-avatars.com/api/?name=Jessica+Lee&background=0062FF&color=fff",
        date: "April 5, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        featured: false
    }
];
