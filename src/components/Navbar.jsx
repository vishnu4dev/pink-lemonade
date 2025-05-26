import React, { useState } from 'react';
import '../style/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">Pink Lemonade</div>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeMenu}><a href="#about">About</a></li>
          <li onClick={closeMenu}><a href="#menu">Menu</a></li>
          <li onClick={closeMenu}><a href="#locationmap">Find Us</a></li>
          <li onClick={closeMenu}><a href="#contact">Contact Us</a></li> 
        </ul>
      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
