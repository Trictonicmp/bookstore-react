import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

export default configureStore({
  books,
  categories,
});
