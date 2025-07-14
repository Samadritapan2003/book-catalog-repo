import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBook from './components/AddBook';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>📚 Book Catalog</h1>
        <nav>
          <Link to="/add">➕ Add Book</Link>
        </nav>

        <Routes>
          <Route path="/add" element={<AddBook />} />
          <Route path="/" element={<h3>Welcome! Select an option.</h3>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;