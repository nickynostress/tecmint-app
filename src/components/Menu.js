import React from 'react';
import { Link } from 'react-router-dom';
import './styles/menu.css'; // Import the CSS file

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/navigation">Navigation</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;

