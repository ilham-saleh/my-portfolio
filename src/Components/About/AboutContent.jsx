import Me from "../../assets/Ilham/ilhamNew2.png";
import { FaArrowDown } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function AboutContent({ personalInfos }) {
  return (
    <div className="about-content grid about">
      <div className="personal-info-container" data-aos="fade-right">
        <h2 className="personal-info-title">Personal Informations</h2>
        <ul>
          {personalInfos.map(({ title, desc, id }) => (
            <li key={id}>
              <p>{title}</p> <h4>{desc}</h4>
            </li>
          ))}
        </ul>
        <a href="#skills">
          <button className="button">
            Scroll Down{" "}
            <span>
              <FaArrowDown />
            </span>
          </button>
        </a>
      </div>

      <img src={Me} alt="Desktop" className="about-img" data-aos="fade-left" />

      <div className="about-color-block"></div>
    </div>
  );
}
