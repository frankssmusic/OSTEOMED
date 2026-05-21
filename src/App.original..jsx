// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Futuro: <Route path="/especialidad/:id" element={<Especialidad />} /> */}
      </Routes>
    </Router>
  );
}

export default App;