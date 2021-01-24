import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mylogo from "../img/mylogo.svg";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      const pageHeight = document.body.getBoundingClientRect().height;
      if (scrollHeight > pageHeight / 8) {
        setOpen(false);
      }
    });
  },[]);

  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Sidebar />}
      <div className="nav-container">
        <img src={mylogo} alt="logo" />
        <div onClick={handleOpen} className="nav-toggle">
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
