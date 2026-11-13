import React from 'react';
import { checkAdminSession, fetchBlogs, fetchPortfolios } from '../actions';
import AdminDashboardClient from './AdminDashboardClient';

export const metadata = {
  title: 'CNIT Admin Portal | Content Management System',
  description: 'Manage CodeNext IT portfolio case studies, blogs, and uploads in real-time.',
};

export default async function AdminPage() {
  const isAuthenticated = await checkAdminSession();
  const blogs = await fetchBlogs();
  const portfolios = await fetchPortfolios();

  return (
    <AdminDashboardClient 
      initialAuthenticated={isAuthenticated} 
      initialBlogs={blogs} 
      initialPortfolios={portfolios} 
    />
  );
}
