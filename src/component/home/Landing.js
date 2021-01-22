import React from "react";
import landing_svg from "../img/rafiki.svg";
import contact_svg from "../img/cuate.svg";
import project1 from "../img/project1.png";

export default function Landing() {
  return (
    <section>
      <div className="landing-container">
        <img src={landing_svg} alt="a dev illustration"></img>
        <div>
          <h1>Creating beutifully websites design for your business.</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            inventore tempora optio molestias modi recusandae?
          </p>
          <button>Hire Me</button>
        </div>
      </div>
      <section className="about-container">
        <h1>Get to know about me</h1>
        <div className="about-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            inventore tempora optio molestias modi recusandae? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Distinctio
          </p>
          <div>
            <button>Download Resume</button>
            <div className="tech-container">
              <ul>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>NODEJS</li>
                <li>MONGODB</li>
                <li>SASS</li>
                <li>CSS</li>
                <li>HTML5</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h1>Recent Projects</h1>
        <div className="project-container">
          <div className="project">
            <img src={project1} alt="project1"></img>
          </div>
        </div>
      </section>

      <section className="review-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          inventore tempora optio molestias modi recusandae? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Distinctio
        </p>
      </section>

      <section className="contact-section">
        <h1>Like What you see why not contact me 👇👇</h1>
        <div className="contact-wrapper">
          <img src={contact_svg} alt="contact me"></img>
          <div className="contact-textbox">
            <input
              className="email-input"
              type="text"
              placeholder="Enter your email"
            />
            <textarea
              className="msg-input"
              placeholder="Enter your message"
            ></textarea>
            <button>Submit</button>
          </div>
        </div>
      </section>

      <footer>
        <p>Adeyemi</p>
        <p>logo</p>
      </footer>
    </section>
  );
}
