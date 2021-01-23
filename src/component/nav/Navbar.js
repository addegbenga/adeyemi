import React from "react";
import { Link } from "react-router-dom";
import mylogo from "../img/mylogo.svg";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={mylogo} alt="logo"/>
      <i className="fa fa-bars"></i>
      <ul>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Project</Link>
        </li>
        <li>
          <Link to="#">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
