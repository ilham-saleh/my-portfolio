import { projects } from "../../data";
import CloseIcon from '../../assets/close-icon.svg'
import { useState } from "react";

export default function ProjectItem({img, title, details, link}) {
    const [showProject, setShowProject] = useState(false)

    const toggleshowProject = () => {
        setShowProject(!showProject)
    }

    return (
        <div className="project-item" data-aos="fade-up">
            <img src={img} alt="Project-Image" className="project-img"/>

            <div className="project-hover" onClick={toggleshowProject}>
                <h3 className="project-title">{title}</h3>
            </div>

            {showProject && (
                <div className="project-show">
                    <div className="project-show-content">
                        <img src={CloseIcon} alt="close icon" className="show-close" onClick={toggleshowProject}/>

                    <h3 className="show-title">{title}</h3>

                    <ul className="show-list grid">
                        {details.map(({icon, title, desc}, index) => (
                            <li className="show-item" key={index}>
                                <span className="show-item-icon">{icon}</span>

                                <div>
                                    <span className="show-item-title">{title} </span>
                                    <a href={link} target="_blank"><span className="show-item-desc">{desc}</span></a>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <img src={img} alt="" className="show-img" />
                        </div>
                </div>
            )}
            
        </div>
    )
}