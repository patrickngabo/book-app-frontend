import * as types from '../constants/actionTypes';

const initialState = {
  books: {},
  loading: false,
  errors: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_BOOK_SUCCESS:
      return { ...state, books: action.payload, loading: false };
    case types.UPDATE_BOOK_SUCCESS:
      return { ...state, books: action.payload, loading: false };
    case types.LOAD_BOOKS_SUCCESS:
      return { ...state, books: action.payload };
    case types.DELETE_BOOK_OPTIMISTIC:
      return { ...state, books: action.payload, loading: false };
    default:
      return state;
  }
};

export default bookReducer;
