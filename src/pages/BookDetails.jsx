import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const books = [
  {
    id: 'react-basics',
    title: 'React Basics',
    author: 'Jane Doe',
    cover: 'https://via.placeholder.com/150x200.png?text=React+Basics',
    description: 'Learn the fundamentals of React.js with hands-on examples.',
    content: 'Full chapters and detailed explanations covering React components, state, props, hooks, and routing.'
  },
  {
    id: 'advanced-js',
    title: 'Advanced JavaScript',
    author: 'John Smith',
    cover: 'https://via.placeholder.com/150x200.png?text=Advanced+JS',
    description: 'Deep dive into modern JavaScript features and best practices.',
    content: 'Comprehensive guide to ES6+, async programming, closures, event loops, and advanced concepts with examples.'
  },
  {
    id: 'digital-libraries',
    title: 'Digital Libraries',
    author: 'Emily Johnson',
    cover: 'https://via.placeholder.com/150x200.png?text=Digital+Libraries',
    description: 'Understand the concepts and technologies behind digital libraries.',
    content: 'Covers library management systems, digital archiving, search algorithms, metadata standards, and user experience.'
  },
];

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar brand="Digital Library" />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl text-red-500">Sorry, the book you are looking for does not exist.</p>
        </main>
        <Footer brand="Digital Library" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar
        brand="Digital Library"
        links={[
          { name: 'Home', href: '/' },
          { name: 'Library', href: '/books' },
          { name: 'About', href: '/about' },
        ]}
      />

      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <img src={book.cover} alt={`${book.title} cover`} className="w-full md:w-1/3 rounded-xl shadow-lg" />

          <div className="flex-1 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">{book.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">by {book.author}</p>
            <p className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-line">{book.content}</p>

            <button
              onClick={() => alert(`Opening ${book.title} reader...`)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Read Now
            </button>
          </div>
        </div>
      </main>

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
