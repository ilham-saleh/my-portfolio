import React from "react";
import {
  personalInfos,
  technicalSkills,
  otherSkills,
  skillsIcons,
} from "../../data";

import AboutContent from "./AboutContent";
import "./About.css";

// import { MdOutlineHtml } from "react-icons/md";
// import { FaReact } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaGitAlt } from "react-icons/fa";

// import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Progress } from "rsuite";
// import 'rsuite/dist/rsuite.min.css'
import "rsuite/dist/rsuite-no-reset.min.css";

function About() {
  return (
    <section className="section">
      <h1 className="about-title section-title">
        About <span>Me</span>
      </h1>
      <AboutContent personalInfos={personalInfos} />
      <div className="seperator"></div>

      <h1 className="skills-title section-title">
        My <span>Skills</span>
      </h1>
      <div className="skills-upper-container" data-aos="fade-up">
        <div className="skills-icons-container">
          {skillsIcons.map(({ icon, name, id }) => (
            <div className="skill" key={id}>
              <img src={icon} alt={name} />
              {/* <span>{name}</span> */}
            </div>
          ))}
        </div>
      </div>

      <div id="skills" className="skills-container grid">
        <div className="technical-skills-container" data-aos="fade-right">
          <h4 className="section-title technical-skills-title">
            Technical Skills
          </h4>
          <ul className="technical-skills">
            {technicalSkills.map(({ icon, name, desc, percentage, id }) => (
              <li key={id}>
                <div className="progress-title">
                  <div className="icon-and-name">
                    {icon}
                    <h4 style={{ fontSize: 16 }}>{name}</h4>{" "}
                    <span style={{ fontSize: 14 }}>{desc}</span>
                  </div>
                  <div>
                    <h4 className="percentage">{`${percentage}%`}</h4>
                  </div>
                </div>

                <Progress.Line percent={percentage} />
              </li>
            ))}
          </ul>
        </div>

        <div className="other-skills" data-aos="fade-left">
          <h4 className="section-title other-skills-title">Other Skills</h4>
          <ul className="other-skills-container">
            {otherSkills.map(({ id, name, percentage }) => (
              <li key={id}>
                <CircularProgressbar
                  strokeWidth={6.5}
                  text={percentage}
                  value={percentage}
                />
                <h4>{name}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
