import React from 'react';
import Menu from './Menu';
import './styles/header.css';

function Header() {
  return (
    <header>
      <h1 className="header-title">Portfolio Website</h1>
      <Menu />
    </header>
  );
}

export default Header;
