import React from 'react';
import { Navbar, Footer } from '../components';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar brand="Digital Library" links={[
        { name: 'Home', href: '/' },
        { name: 'Library', href: '/books' },
        { name: 'Categories', href: '/categories' },
        { name: 'Profile', href: '/profile' },
      ]} />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <Footer brand="Digital Library" links={[
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Contact', href: '/contact' },
      ]} />
    </div>
  );
}
