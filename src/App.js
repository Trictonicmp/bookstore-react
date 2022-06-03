import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav';
import BooksPage from './pages/BooksPage';

const App = () => (
  <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
