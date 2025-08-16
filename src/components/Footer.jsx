import React from 'react';
import { Link } from 'react-router-dom';


/**
 * Footer Component
 * Props:
 *  - brand: string (library name)
 *  - links: array of { name: string, href: string }
 *  - copyrightYear: number (current year)
 */
export default function Footer({ brand = 'Digital Library', links = [], copyrightYear }) {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <span className="font-bold text-blue-600 dark:text-blue-400">{brand}</span>
          <p className="text-sm mt-1">© {copyrightYear || new Date().getFullYear()} {brand}. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
