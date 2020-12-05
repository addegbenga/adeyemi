import React from "react";
import "./navbarStyle.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <h1>ADEYEMI</h1>
        <ul className="nav-link-ul">
          <li className="nav-link">
            <i className="fa fa-bars fa-2x"></i>
          </li>
          <li className="nav-link">MENU</li>
        </ul>
      </div>
    </div>
  );
}
