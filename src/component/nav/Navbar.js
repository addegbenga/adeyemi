import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mylogo from "../img/mylogo.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power4 } from "gsap";

export default function Navbar() {
  // const [isOpen, setOpen] = useState(false);
  const sidenavRef = useRef(null);
  const sideLink = useRef(null);

  const tl = gsap.timeline({ paused: true, reversed: true });
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.to(sidenavRef.current, {
      ease: Power4.easeInOut,
      duration: 0.5,
      onStart: () => {
        console.log("start");
      },
      onComplete: () => {
        console.log("ended");
      },
      css: {
        display: "block",
        opacity: 1,
      },
    }).from(sideLink.current, {
      duration: 0.3,
      opacity: 0,
      y: 40,
    });
  }, [tl]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      const pageHeight = document.body.getBoundingClientRect().height;
      if (scrollHeight > pageHeight / 8) {
        tl.reverse();
      }
    });
  }, [tl]);

  return (
    <>
      <div
        className="sidebar-container"
        ref={sidenavRef}
        onClick={() => {
          tl.reverse();
        }}
      >
        <div>
          <ul ref={sideLink}>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
      <div className="nav-container">
        <img src={mylogo} alt="logo" />
        <div className="nav-toggle" onClick={() => tl.play()}>
          <i className="fa fa-bars "></i>
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
