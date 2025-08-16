import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const categories = [
  { name: 'Fiction', description: 'Explore imaginative and narrative books.', image: 'https://via.placeholder.com/150x150.png?text=Fiction' },
  { name: 'Science', description: 'Discover books on physics, biology, and more.', image: 'https://via.placeholder.com/150x150.png?text=Science' },
  { name: 'Technology', description: 'Learn about modern tech and programming.', image: 'https://via.placeholder.com/150x150.png?text=Technology' },
  { name: 'History', description: 'Dive into historical events and biographies.', image: 'https://via.placeholder.com/150x150.png?text=History' },
  { name: 'Art', description: 'Books about painting, design, and visual arts.', image: 'https://via.placeholder.com/150x150.png?text=Art' },
  { name: 'Self-Help', description: 'Improve your life and skills with these books.', image: 'https://via.placeholder.com/150x150.png?text=Self-Help' },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar
        brand="Digital Library"
        links={[
          { name: 'Home', href: '/' },
          { name: 'Library', href: '/books' },
          { name: 'Categories', href: '/categories' },
        ]}
      />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Book Categories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm">{category.description}</p>
                <button
                  onClick={() => alert(`Viewing ${category.name} books...`)}
                  className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
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