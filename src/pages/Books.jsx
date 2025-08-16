import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import BookCard from '../components/BookCard.jsx';

const allBooks = [
  {
    title: 'React Basics',
    author: 'Jane Doe',
    cover: 'https://via.placeholder.com/150x200.png?text=React+Basics',
    description: 'Learn the fundamentals of React.js with hands-on examples.',
  },
  {
    title: 'Advanced JavaScript',
    author: 'John Smith',
    cover: 'https://via.placeholder.com/150x200.png?text=Advanced+JS',
    description: 'Deep dive into modern JavaScript features and best practices.',
  },
  {
    title: 'Digital Libraries',
    author: 'Emily Johnson',
    cover: 'https://via.placeholder.com/150x200.png?text=Digital+Libraries',
    description: 'Understand the concepts and technologies behind digital libraries.',
  },
  {
    title: 'Node.js Guide',
    author: 'Michael Lee',
    cover: 'https://via.placeholder.com/150x200.png?text=Node.js+Guide',
    description: 'Comprehensive guide to building backend applications with Node.js.',
  },
  {
    title: 'CSS Mastery',
    author: 'Laura Kim',
    cover: 'https://via.placeholder.com/150x200.png?text=CSS+Mastery',
    description: 'Master CSS layout, animations, and responsive design techniques.',
  },
];

export default function Books() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar
        brand="Digital Library"
        links={[
          { name: 'Home', href: '/' },
          { name: 'Library', href: '/books' },
          { name: 'About', href: '/about' },
        ]}
      />

      {/* Page Title */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Library Collection</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Browse all available books in our digital library.
        </p>
      </section>

      {/* Books Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              cover={book.cover}
              description={book.description}
              onRead={() => alert(`Opening ${book.title}...`)}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer
        brand="Digital Library"
        links={[
          { name: 'Privacy Policy', href: '/privacy' },
          { name: 'Terms of Service', href: '/terms' },
          { name: 'Contact', href: '/contact' },
        ]}
      />
    </div>
  );
}
