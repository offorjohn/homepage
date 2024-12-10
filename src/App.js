import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './hompage';
import About from './components/about';
const App = () => (
  <Routes>

   <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default App;
