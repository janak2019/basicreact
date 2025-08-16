import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navbar Component
 * Props:
 *  - brand: string (library name/logo text)
 *  - links: array of { name: string, href: string }
 */

export default function Navbar({ brand = 'Digital Library', links = [] }) {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{brand}</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu placeholder */}
          <div className="flex items-center md:hidden">
            {/* You can add hamburger menu icon here */}
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
