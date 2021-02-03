import React, { useEffect, useRef, useState } from "react";
import mockup from "../img/new mockup.svg";
import mockupDp from "../img/Ellipse 5.svg";
import logo1 from "../img/p1 1.svg";
import logo2 from "../img/p4 1 (1).svg";
import logo3 from "../img/portfolio-details.svg";
import logo4 from "../img/p2 2.svg";
import laptop from "../img/laptop.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power3 } from "gsap";

export default function Landing({ setForm }) {
  const [intro, setIntro] = useState([
    {
      msg: ` Enthusiastic and self-moltivated full stack web developer with 3
      + years of experience`,
      img: mockupDp,
    },

    {
      msg: "msg two",
    },
    {
      msg: "msg three",
    },
  ]);

  // setIntro(null)

  // const increement = () => {
  //   setIntro();
  //   setCount(count + 1);
  // };
  // const decreement = () => {
  //   setCount(count - 1);
  // };
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
      <div intro={setIntro} className="landing-container">
        <div className="landing-content">
          <h1 ref={header}> Creating beutifully crafted web design.</h1>
          <p ref={subheader}>
            {/* Hey there i"m a full stack developer specialised in NodeJS on the
            backend, javascript and React/Redux for frontend developement My aim
            is to make the web a beutifull place creating the balance between
            intuitive design and functionality... */}
            lorem ipsume is some words you have to put out ther to get some
            audienc you knlorem ipsume is
          </p>
          <button>LETS TALK</button>
          <div className="mock-container" ref={svgDesign}>
            <div className="mock-up-content">
              <img className="mockdp" src={mockupDp} alt="dp" />
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <ul>
                <a href="twitter.com/addegbenga">
                  <i className="fa fa-twitter fa-lg" style={{ color: "white" }}></i>
                </a>
                <a href="twitter.com/addegbenga">
                  <i className="fa fa-github fa-lg" style={{ color: "white" }}></i>
                </a>
                <a href="twitter.com/addegbenga">
                  <i className="fa fa-linkedin fa-lg" style={{ color: "white" }}></i>
                </a>
              </ul>
            </div>
            <img
              className="mock-img"
              data-src={mockup}
              alt="contact me"
              ref={imageRef}
            ></img>
          </div>
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
              <h1 className="project-mobile-title">QWIKKER</h1>
            </div>
            <div className="project-info">
            <h1 className="project-lg-title">QWIKERR</h1>
              <p>
                A digital business card platform made for creatives and creators
              </p>
              <button className="demo">View Demo</button>
            </div>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo1} alt="stock" />
              </span>
              <h1 className="project-mobile-title">TUTORHUB</h1>
            </div>
            <div className="project-info">
            <h1 className="project-lg-title">TUTOR HUB</h1>
              <p>
                A Learning platform that allows students to connect to tutors in
                there neigbourhood and so more
              </p>
              <button className="demo">View Demo</button>
            </div>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo2} alt="stock" />
              </span>
              <h1 className="project-mobile-title">AGENT NOW</h1>
            </div>
            <div className="project-info">
            <h1 className="project-lg-title">AGENT NOW</h1>
              <p>
                An agency platform that connects those seeking for a new
                apartment to a nearby agents in no time.
              </p>
              <button className="demo">View Demo</button>
            </div>
          </div>

          <div className="project">
            <div>
              <span>
                <img src={logo3} alt="stock" />
              </span>
              <h1 className="project-mobile-title">WESTREAM</h1>
            </div>
            <div className="project-info">
              <h1 className="project-lg-title">WESTREAM</h1>
              <p>Video streaming platform</p>
              <button className="demo">View Demo</button>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        {/* <h1>About me</h1> */}
        <p className="about-number">02</p>
        <div className="about-container">
          <div className="about-placeholder">
            <img className="mock-laptop" src={laptop} alt="about-me"></img>
            <div className="about-info">
              <img className="abt-img" src={mockupDp} alt="avatar" />
              <p>
                {/* Enthusiastic and self-moltivated full stack web developer with 3
                + years of experience. specialised in Nodejs for backend,
                javascript and React/Redux for frontend development and
                Mongodb/sequelize for database applications. in my previous
                roles designed a scalable database schema using mongodb and a
                efficient restfull api architecture using nodejs. when i am not
                coding i play chess or console games. I love what i do and i"m
                open to work opportunites. */}
                {intro[0].msg}
              </p>

              <button>Download resume</button>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <h1>Technologies</h1>
        <div className="tech-container">
          <p>JAVASCRIPT</p>
          <p>NODE JS</p>
          <p>REACT</p>
          <p>SOCKETS.IO</p>
          <p>MONGODB</p>
          <p>CSS3</p>
          <p>HTML5</p>
          <p>SASS</p>
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
