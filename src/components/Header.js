import React from 'react';
import './Header.css';
import Logo from './Logo.png';

function Header() {
  return (
    <header className="header">
      <h1>Your voting</h1>
      <img className="logo" src={Logo} alt="logo"></img>
    </header>
  );
}
export default Header;
