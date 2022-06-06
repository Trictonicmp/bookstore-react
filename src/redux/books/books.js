// Action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action creators
export const addBook = () => ({ type: ADD_BOOK });
export const removeBook = () => ({ type: REMOVE_BOOK });

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        author: action.author,
        title: action.title,
      };
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
