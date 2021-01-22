import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-container">
      <h1>Logo</h1>
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
