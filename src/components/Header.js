import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/assets/zizzy_logo.svg" alt="App Store" className="app-logo" />
      <nav className="navigation">
        <a href="#value">Value</a>
        <a href="#service">Service</a>
        <a href="#tech">Tech</a>
        <a href="#team">Team</a>
      </nav>
    </header>
  );
}

export default Header;
