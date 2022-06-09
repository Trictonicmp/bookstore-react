import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './css/index.css';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer,
  middleware: () => getDefaultMiddleware().concat(thunk),
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
