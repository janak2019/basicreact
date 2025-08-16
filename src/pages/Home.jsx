import React from 'react';
import Navbar from '../components/Navbar.jsx';

import BookCard from '../components/BookCard.jsx';
import  Footer from '../components/Footer.jsx';

const sampleBooks = [
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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar
        brand="Digital Library"
        links={[
          { name: 'Home', href: '/' },
          { name: 'Library', href: '/library' },
          { name: 'About', href: '/about' },
          { name: 'Login', href: '/login' },

        ]}
      />

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Digital Library</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore, read, and learn from a collection of curated digital books.
        </p>
      </section>

      {/* Books Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleBooks.map((book, index) => (
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
