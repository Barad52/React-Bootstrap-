import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './Component/Home';
import About from './Component/About';
import Cards from './Component/card';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;
