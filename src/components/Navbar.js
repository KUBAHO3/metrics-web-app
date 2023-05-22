import React from 'react';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className="consDisplay displays">
      <button className="backBtn iconSize" type="button" key={Date.now()} aria-label="Back"><FaAngleLeft /></button>
      <h2>Vintage Collections</h2>
      <div className="iconsCtn displays">
        <span className="iconSize"><FaMicrophone /></span>
        <span className="iconSize"><AiOutlineSetting /></span>
      </div>
    </nav>
  );
}

export default Navbar;
