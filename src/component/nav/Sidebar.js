import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";

export default function Sidebar() {
  const sidenavRef = useRef(null);
  const sideLink = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(sidenavRef.current, {
      duration: 0.7,
      ease: Power3,
      // opacity: 0.3,
      x: 100,
    }).from(sideLink.current, {
      duration: 0.5,
      opacity: 0,
      ease: Power3,
      y:50
    }, );
  }, []);
  return (
    <div className="sidebar-container" ref={sidenavRef}>
      <ul ref={sideLink}>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}
