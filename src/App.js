import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav';
import Books from './pages/Books';

const App = () => (
  <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </Router>
  </div>
);

export default App;
