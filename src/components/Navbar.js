import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar-container">
      <button className="back-button" type="button" key={Date.now()} aria-label="Back" onClick={() => navigate(-1)}><FaAngleLeft /></button>
      <h2>Vintage Collections</h2>
      <div className="nav-icons">
        <span className="nav-icon"><FaMicrophone /></span>
        <span className="nav-icon"><AiOutlineSetting /></span>
      </div>
    </nav>
  );
}

export default Navbar;
