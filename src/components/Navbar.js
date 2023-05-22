import React from 'react';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <button className="back-button" type="button" key={Date.now()} aria-label="Back"><FaAngleLeft /></button>
      <h2>Vintage Collections</h2>
      <div className="nav-icons">
        <span className="nav-icon"><FaMicrophone /></span>
        <span className="nav-icon"><AiOutlineSetting /></span>
      </div>
    </nav>
  );
}

export default Navbar;
