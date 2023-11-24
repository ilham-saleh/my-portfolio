import React from "react";

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import { MdOutlineHtml } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

 export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className="nav-icon" />,
        to: '/'
    },
    {
        id: 2,
        name: 'About',
        icon: <FaUser className="nav-icon"/>,
        to: '/about'
    },
    {
        id: 3,
        name: 'Projects',
        icon: <FaFolderOpen className="nav-icon"/>,
        to: '/projects'
    },
    {
        id: 4,
        name: 'Contact',
        icon: <MdContactPhone className="nav-icon"/>,
        to: '/contact'
    },
]

export const personalInfos = [ 
    {
        id: 1,
        title: "First Name: ",
        desc: "Ilham"
    },

    {
        id: 2,
        title: "Last Name: ",
        desc: "Saleh"
    },

    {
        id: 3,
        title: "Age: ",
        desc: "27"
    },

    {
        id: 4,
        title: "Phone: ",
        desc: "+447745756106"
    },
    {
        id: 5,
        title: "Nationality: ",
        desc: "Uzbek"
    },    {
        id: 6,
        title: "Based in: ",
        desc: "London"
    },

    {
        id: 7,
        title: "Email: ",
        desc: "ilham2saleh@gmail.com"
    },

    {
        id: 8,
        title: "Languages: ",
        desc: "English"
    }
]

export const technicalSkills = [ 
    {
        id: 1,
        icon: <FaHtml5 className="logo html-logo"/>,
        name: 'HTML',
        percentage: '45' 
    },

    {
        id: 2,
        icon: <FaCss3Alt className="logo css-logo"/>,
        name: 'CSS',
        percentage: '85' 
    },

    {
        id: 3,
        icon: <IoLogoJavascript className="logo js-logo"/>,
        name: 'JavaScript',
        percentage: '70' 
    },

    {
        id: 4,
        icon: <FaReact className="logo react-logo"/>,
        name: 'React',
        percentage: '82' 
    },

    {
        id: 5,
        icon: <FaGitAlt className="logo git-logo"/>,
        name: 'Git/GitHub',
        percentage: '60' 
    },
    
    
]

export const otherSkills = [
    
    {
        id: 1,
        name: 'Data/APIs',
        percentage: 75
    },

    {
        id: 2,
        name: 'Creativity',
        percentage: 85
    },
    
    {
        id: 3,
        name: 'Communication',
        percentage: 68
    },

    {
        id: 4,
        name: 'Team Work',
        percentage: 80
    },

]
// export default links