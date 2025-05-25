import React, { useState } from 'react';
import '../style/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">Pink Lemonade</div>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;
