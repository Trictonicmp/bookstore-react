import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './css/index.css';
import rootStore from './redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootStore);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
