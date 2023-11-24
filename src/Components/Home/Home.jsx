import React from "react";
import CV from '../../assets/Ilham/Ilham_Saleh_CV.pdf'

import { FaArrowDown } from "react-icons/fa6"
import Ilham from '../../assets/Ilham/IlhamNew.png'
import './Home.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
    return (
        <div className="section grid home container">
            <img src={Ilham} alt="random-guy" className="home-img" data-aos="fade-right"/>

            <div className="home-content-container" data-aos="fade-left">
                <div className="home-title">
                    <h1>I'm Ilham Saleh</h1>
                    <h1>Front-End Developer</h1>
                </div>
                <div className="home-content">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, beatae sapiente perspiciatis commodi molestiae odio nemo ea excepturi doloremque vel!</p>
                </div>

                <a href={CV} download>
                    <button className="button">
                        Download CV
                        <span>
                            <FaArrowDown className="arrow-down"/>
                        </span>
                    </button>
                </a>
            </div>

            <div className="color-block"></div>
        </div>
    )
}

export default Home