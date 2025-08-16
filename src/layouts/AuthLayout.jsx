import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
