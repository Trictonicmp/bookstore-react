// Action types
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Action creators
export const checkStatus = () => CHECK_STATUS;

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default reducer;
