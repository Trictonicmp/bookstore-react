// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action creators
export const addBook = () => ({ type: ADD_BOOK });
export const removeBook = () => ({ type: REMOVE_BOOK });

// Reducer
const reducer = (state = [], action) => {
  let newState = null;
  switch (action.type) {
    case ADD_BOOK:
      newState = {
        ...state,
        author: action.author,
        title: action.title,
      };
      break;
    case REMOVE_BOOK:
      newState = state.filter((book) => book.id !== action.id);
      break;
    default:
      newState = state;
  }

  return newState;
};

export default reducer;
