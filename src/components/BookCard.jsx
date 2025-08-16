import React from 'react';

/**
 * BookCard Component
 * Props:
 *  - title: string (book title)
 *  - author: string (author name)
 *  - cover: string (image URL for book cover)
 *  - description: string (short description or summary)
 *  - onRead: function (callback when 'Read' button is clicked)
 */

export default function BookCard({ title, author, cover, description, onRead }) {
  return (
    <div className="max-w-xs bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Book Cover */}
      <img src={cover} alt={`${title} cover`} className="w-full h-48 object-cover" />

      {/* Book Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 truncate">by {author}</p>
        <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3">{description}</p>

        {/* Read Button */}
        <button
          onClick={onRead}
          className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Read
        </button>
      </div>
    </div>
  );
}
