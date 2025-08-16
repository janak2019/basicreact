import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'January 2024',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar brand="Digital Library" />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Profile Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Name</label>
              <p className="mt-1 text-gray-900 dark:text-white font-medium">{user.name}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Email</label>
              <p className="mt-1 text-gray-900 dark:text-white font-medium">{user.email}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Member Since</label>
              <p className="mt-1 text-gray-900 dark:text-white font-medium">{user.memberSince}</p>
            </div>

            <button
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              onClick={() => alert('Edit profile functionality coming soon!')}
            >
              Edit Profile
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
