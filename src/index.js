import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './css/index.css';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer,
});

console.log(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
