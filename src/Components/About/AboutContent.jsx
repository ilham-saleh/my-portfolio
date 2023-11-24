import smile from '../../assets/smile.jpg'
import desk1 from '../../assets/desk-1.jpg'
import Me2 from '../../assets/ilham-portfolio-2.png'
import MyCuriosity from '../../assets/my-curiosity.jpg'
import { FaArrowDown } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function AboutContent({personalInfos}) {
    return (     
     <div className="about-content grid about">
        <div className="personal-info-container" data-aos="fade-right">
            <h2 className="personal-info-title">Personal Informations</h2>
            <ul>
                {personalInfos.map(({title, desc, id}) => (
                    <li key={id}><p>{title}</p> <h4>{desc}</h4></li>
                ))}
            </ul>
            <a href="#skills"><button className="button">Scroll Down <span><FaArrowDown/></span></button></a>
        </div>

        <img src={Me2} alt="Desktop" className="about-img" data-aos="fade-left"/>
    </div>
    )
}