/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';

const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())),
  );
};

export default configureStore;
