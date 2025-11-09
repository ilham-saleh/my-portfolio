// import React from "react";
import CV from "../../assets/Ilham/ilhamSaleh-jrDeveloperCV.pdf";

import { FaArrowDown } from "react-icons/fa6";
import Ilham from "../../assets/Ilham/3d-man2.png";
import "./Home.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <div className="section grid home container">
      <img
        src={Ilham}
        alt="random-guy"
        className="home-img"
        data-aos="fade-right"
      />

      <div className="home-content-container" data-aos="fade-left">
        <div className="home-title">
          <h1>I'm Ilham Saleh</h1>
          <h1>Software Developer</h1>
        </div>
        <div className="home-content">
          <p>
            Experienced full-stack developer with industry-specific skills in
            designing, developing, and deploying robust web applications.
            Skilled in both frontend and backend development
          </p>
        </div>

        <a href={CV} download>
          <button className="button">
            Download CV
            <span>
              <FaArrowDown className="arrow-down" />
            </span>
          </button>
        </a>
      </div>

      <div className="color-block"></div>
    </div>
  );
}

export default Home;
