import React, { useState } from "react";
import { Link } from "react-router-dom";
import mylogo from "../img/mylogo.svg";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Sidebar />}
      <div className="nav-container">
        <img src={mylogo} alt="logo" />
        <div onClick={handleOpen}>
          <i className={`fa fa-bars ${isOpen ? "fa fa-times" : ""}`}></i>
        </div>
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
    </>
  );
}
