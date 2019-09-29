import axios from 'axios';
import * as types from '../constants/actionTypes';


export const setBookSuccess = (payload) => ({
  type: types.CREATE_BOOK_SUCCESS,
  payload,
});

export const createBookSuccess = (payload) => (dispatch) => {
  axios.post('https://book-app-backend.herokuapp.com/api/v1/books', payload)
    .then((data) => {
      dispatch(setBookSuccess(data));
    })
    .catch((error) => {
      dispatch({ errors: error.response.data.error });
    });
};
