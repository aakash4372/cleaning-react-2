import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarsection from './Page/Navbar';
import Carousel from './Page/Carousel';
import Aboutus from './Page/Aboutus';

export default function App() {
  return (
    <Router>
      <Navbarsection />
      <Routes>
        <Route path="/" element={<Carousel/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/our-work" element={<h1>Our Work Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}
