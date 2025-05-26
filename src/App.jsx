import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <div className="app">
      <header className="floating-header">
        <Navbar/>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
