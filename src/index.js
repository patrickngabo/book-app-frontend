import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import './assets/css/index.css';
import configureStore from './redux/store/configureStore';


const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App'),
);
