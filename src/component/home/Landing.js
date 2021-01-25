import React, { useEffect, useRef } from "react";
import mockup from "../img/mockup.svg";
import about from "../img/about.svg";
import html5 from "../img/html5.svg";
import nodejs from "../img/nodejs.svg";
import css3 from "../img/css3.svg";
import reactPng from "../img/react.svg";
import javascript from "../img/javascript.svg";
import logo1 from "../img/marvel.png";
import logo2 from "../img/jira_ops.png";
import logo3 from "../img/yii 1.png";
import logo4 from "../img/autodesk.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power3 } from "gsap";

export default function Landing() {
  useEffect(() => {});
  const header = useRef(null);
  const imageRef = useRef(null);
  const subheader = useRef(null);
  const svgDesign = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(header.current, {
      duration: 0.7,
      opacity: 0,
      y: -10,
      ease: Power3,
      stagger: {
        amount: 2,
        ease: Power3.easeIn,
      },
    })
      .from(subheader.current, {
        duration: 1,
        opacity: 0,
        y: 30,
      })
      .from(svgDesign.current, {
        duration: 1,
        opacity: 0,
        y: 20,
      });
  }, []);

  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px",
  };
  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  }
  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          preloadImage(entry.target);
          imgObserver.unobserve(entry.target);
        }
      });
    }, imgOptions);
    imgObserver.observe(imageRef.current);
  });

  return (
    <section>
      <div className="landing-container">
        <div className="landing-content">
          <h1 ref={header}>
            {" "}
            Creating beutifully websites design for your business.
          </h1>
          <p ref={subheader}>
            {" "}
            lorem ipsume is some words you have to put out ther to get some
            audienc you knlorem ipsume is some words you have to put out ther to
            get some audienc .
          </p>
        </div>
        <div className="mock-container" ref={svgDesign}>
          <img
            className="mock-img"
            data-src={mockup}
            alt="contact me"
            ref={imageRef}
          ></img>
        </div>
      </div>
      <section className="project-section">
        <h1>Recent work</h1>
        <p className="about-number">01</p>
        <div className="projects-container">
          <div className="project">
            <div>
              <span>
                <img src={logo4} alt="stock" />
              </span>
              <h1>QWIKKER</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              aliquam!
            </p>
            <button className="demo">View Demo</button>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo1} alt="stock" />
              </span>
              <h1>CYPHER</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              aliquam!
            </p>
            <button className="demo">View Demo</button>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo2} alt="stock" />
              </span>
              <h1>DUCKER</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              aliquam!
            </p>
            <button className="demo">View Demo</button>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo3} alt="stock" />
              </span>
              <h1>TOKYO</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              aliquam!
            </p>
            <button className="demo">View Demo</button>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h1>About me</h1>
        <p className="about-number">02</p>
        <div className="about-container">
          <div className="about-placeholder">
            <img src={about} alt="about-me"></img>
          </div>
          <div className="about-info">
            <p>
              Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ipsum fugiat modi dolorem autem
              et, ipsa facilis debitis quam libero quae!
            </p>
            <button>Download resume</button>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <h1>Technologies</h1>
        <div className="tech-container">
          <img src={html5} alt="tech"></img>
          <img src={javascript} alt="tech"></img>
          <img src={reactPng} alt="tech"></img>
          <img src={css3} alt="tech"></img>
          <img src={nodejs} alt="tech"></img>
        </div>
      </section>

      <section className="contact-section">
        <h1> SERVER LESS, DO MORE</h1>
        <p>
          Give your sites the edge Create amazing experiences for the web in
          record time
        </p>
        <button>Contact Me</button>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="footer-links">
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>General</li>
            </ul>
          </div>

          <ul className="social-links">
            <li>
              <i className="fa fa-instagram fa-2x "></i>
            </li>
            <li>
              <i className="fa fa-twitter fa-2x  "></i>
            </li>
            <li>
              <i className="fa fa-whatsapp fa-2x  "></i>
            </li>
            <li>
              <i className="fa fa-github fa-2x  "></i>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
