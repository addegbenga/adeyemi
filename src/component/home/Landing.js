import React from "react";
import mockup from "../img/mockup.svg";
import about from "../img/about.svg";
import html5 from "../img/html5.svg";
import nodejs from "../img/nodejs.svg";
import css3 from "../img/css3.svg";
import reactPng from "../img/react.svg";
import javascript from "../img/javascript.svg";
// import logo1 from "../img/marvel.png";
// import logo2 from "../img/jira_ops.png";
// import logo3 from "../img/yii 1.png";
import logo4 from "../img/autodesk.png";

export default function Landing() {
  return (
    <section>
      <div className="landing-container">
        <div>
          <h1> Creating beutifully websites design for your business.</h1>
          <p>
            {" "}
            lorem ipsume is some words you have to put out ther to get some
            audienc you knlorem ipsume is some words you have to put out ther to
            get some audienc .
          </p>

          <img className="mock-img" src={mockup} alt="contact me"></img>
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
              <h1>KYBERCORE</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              aliquam!
            </p>
            <button className="demo">View Demo</button>
          </div>
          {/* <div  className="project">
            <div>
              <span>
                <img src={logo3} alt="deck" />
              </span>
              <h1>YiCHECH</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              aliquam!
            </p>
            <p  className="development">In developement</p>
            <button  className="demo">View Demo</button>
          </div> */}
          {/* <div  className="project">
            <div>
              <span>
                <img src={logo2} alt="docker" />
              </span>
              <h1>BREAD COMB</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              aliquam!
            </p>
            <p  className="development">In developement</p>{" "}
          </div>
          <button  className="demo">View Demo</button>
        </div> */}
        {/* <div  className="project">
          <div>
            <span>
              <img src={logo1} alt="kuber" />
            </span>
            <h1>ALIAS ADDON</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
            aliquam!
          </p>
          <p  className="development">In developement</p>
          <button  className="demo">View Demo</button>
        </div> */}
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
          {/* <img src="" alt="tech"></img>
          <img src="" alt="tech"></img> */}
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
        <div>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>General</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>logo</li>
            <li>logo</li>
            <li>logo</li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
