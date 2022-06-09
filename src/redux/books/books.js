import { addBookToAPI, removeBookFromAPI, getBooksFromAPI } from '../../API/bookstoreAPI';

// Action types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

// Action creators
export const addBook = (payload) => async (dispatch) => {
  const newBook = { ...payload, category: 'book' };
  await addBookToAPI(newBook);
  dispatch({ type: ADD_BOOK, payload: newBook });
};

export const removeBook = (bookId) => async (dispatch) => {
  const response = await removeBookFromAPI(bookId);
  if (response.length > 0) {
    dispatch({ type: REMOVE_BOOK, bookId });
  }
};

export const getBooks = () => async (dispatch) => {
  const booksObject = await getBooksFromAPI();
  const books = Object.keys(booksObject).map((key) => {
    const newBook = booksObject[key][0];
    newBook.item_id = key;
    return newBook;
  });
  dispatch({ type: GET_BOOKS, books });
};

// helper functions
const getIndexOfIn = (id, booksArr) => {
  for (let i = 0; i < booksArr.length; i += 1) {
    if (booksArr[i].id === id) {
      return i;
    }
  }
  return -1;
};

// Reducer
const DEFAULT_BOOKS = [];
const reducer = (state = DEFAULT_BOOKS, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [
        ...state.slice(0, getIndexOfIn(action.id, state)),
        ...state.slice(getIndexOfIn(action.id, state) + 1),
      ];
    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export default reducer;
