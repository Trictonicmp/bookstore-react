// Action types
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Action creators
export const checkStatus = (message) => ({
  type: CHECK_STATUS,
  message,
});

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        action.message,
      ];
    default:
      return state;
  }
};

export default reducer;
