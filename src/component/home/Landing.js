import React, { useEffect, useRef } from "react";
import mockup from "../img/drey.svg";
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

export default function Landing({ setForm }) {
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
          <h1 ref={header}> Creating beutifully crafted websites.</h1>
          <p ref={subheader}>
            Hey there i"m a full stack developer specialised in NodeJS on the
            backend, javascript and React/Redux for frontend developement My aim
            is to make the web a beutifull place creating the balance between
            intuitive design and functionality...
          </p>
          <button>LETS TALK</button>
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
              A digital business card platform made for creatives and creators
            </p>
            <button className="demo">View Demo</button>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo1} alt="stock" />
              </span>
              <h1>TUTORHUB</h1>
            </div>
            <p>
              A Learning platform that allows students to connect to tutors in
              there neigbourhood and so more
            </p>
            <button className="demo">View Demo</button>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo2} alt="stock" />
              </span>
              <h1>AGENT NOW</h1>
            </div>
            <p>
              An agency platform that connects those seeking for a new apartment
              to a nearby agents in no time.
            </p>
            <button className="demo">View Demo</button>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo3} alt="stock" />
              </span>
              <h1>WESTREAM</h1>
            </div>
            <p>Video streaming platform</p>
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
            {/* Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Ipsum fugiat modi dolorem autem
              et, ipsa facilis debitis quam libero quae! */}

            <p>
              Enthusiastic and self-moltivated full stack web developer with 3 +
              years of experience. specialised in Nodejs for backend, javascript
              and React/Redux for frontend development and Mongodb/sequelize for
              database applications. in my previous roles designed a scalable
              database schema using mongodb and a efficient restfull api
              architecture using nodejs. when i am not coding i play chess or
              console games. I love what i do and i"m open to work opportunites.
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
        <h1>LIKE WHAT YOU SEE</h1>
        <p>
          I"m always open to discussing about work or partnership
          opportunites....
        </p>
        <button onClick={() => setForm(true)}>Contact Me</button>
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
              <a href="https://wa.me/08086771870">
                {" "}
                <i className="fa fa-whatsapp "></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/addegbenga">
                <i className="fa fa-twitter  "></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/addegbenga">
                <i className="fa fa-github  "></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
