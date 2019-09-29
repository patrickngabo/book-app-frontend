
import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const rootReducers = combineReducers({
  books: bookReducer,
});

export default rootReducers;
