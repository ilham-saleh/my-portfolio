import React from "react";
import './Projects.css'

import { projects } from "../../data";
import ProjectItem from "./ProjectItem";


function Projects() {
    return (
        <section className="projects section">
            <h2 className="section-title projects-title">My <span>Projects</span></h2>

            <div className="projects-container container grid" >
                {projects.map((item) => (
                    <ProjectItem key={item.id} {...item}/>
                ))}
            </div>
        </section>
    )
}

export default Projects