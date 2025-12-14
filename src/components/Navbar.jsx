import React from 'react';
import './Navbar.css'; // Don't forget to create this CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">My React Store</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Catalog</a></li>
        <li><a href="/cart">Cart (0)</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;