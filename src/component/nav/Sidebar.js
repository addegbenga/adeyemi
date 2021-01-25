import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power4 } from "gsap";

export default function Sidebar({ setOpen, isOpen, handleOpen }) {
  const sidenavRef = useRef(null);
  const sideLink = useRef(null);
  const tl = gsap.timeline({ paused: true, reversed: true });
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // function play(tween){
    //   tween.reversed() ? tween.play() : tween.reverse();
    // }
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

    isOpen === true && tl.play();
  }, [tl, isOpen]);
  return (
    <div
      className="sidebar-container"
      ref={sidenavRef}
      onClick={() => {
        setOpen(false);
        isOpen === false && tl.reverse();
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
  );
}
