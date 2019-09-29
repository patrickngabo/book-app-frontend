import * as types from '../constants/actionTypes';

export const createBookAction = (payload) => ({
  type: types.CREATE_BOOK_SUCCESS,
  payload,
});
export const loadBooksAction = (payload) => ({
  type: types.LOAD_BOOKS_SUCCESS,
  payload,
});
export const updateBookAction = (payload) => ({
  type: types.UPDATE_BOOK_SUCCESS,
  payload,
});
export const deleteBookAction = (payload) => ({
  type: types.DELETE_BOOK_OPTIMISTIC,
  payload,
});
