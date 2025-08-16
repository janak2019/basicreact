import api from '../../lib/api';

const BookService = {
  getAllBooks: async () => {
    try {
      const response = await api.get('/books');
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  },

  getBookById: async (id) => {
    try {
      const response = await api.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching book with id ${id}:`, error);
      throw error;
    }
  },

  searchBooks: async (query) => {
    try {
      const response = await api.get(`/books?search=${encodeURIComponent(query)}`);
      return response.data;
    } catch (error) {
      console.error(`Error searching books with query ${query}:`, error);
      throw error;
    }
  },

  getCategories: async () => {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
};

export default BookService;