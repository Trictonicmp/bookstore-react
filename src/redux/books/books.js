// Action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action creators
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

// Reducer
const DEFAULT_BOOKS = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Action',
    id: 1,
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Action',
    id: 2,
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    id: 3,
  },
];
const reducer = (state = DEFAULT_BOOKS, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
