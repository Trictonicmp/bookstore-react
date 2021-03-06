import { combineReducers } from 'redux';
import books from './books/books';
import categories from './categories/categories';

const reducer = combineReducers({
  books,
  categories,
});

export default reducer;
