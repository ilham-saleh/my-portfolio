import React from "react";

// Navbar Icons
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

// Skills Icons
import { GoBrowser } from "react-icons/go";
import { TbSettingsCode } from "react-icons/tb";
// import { MdOutlineStyle } from "react-icons/md";
import { IoLibrarySharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

import js from "../src/assets/skills-icons/js.svg"
import react from "../src/assets/skills-icons/react.svg"
import html from "../src/assets/skills-icons/html.svg"
import css from "../src/assets/skills-icons/css.svg"
import tailwind from "../src/assets/skills-icons/tailwind.svg"
import node from "../src/assets/skills-icons/node.svg"
import ts from "../src/assets/skills-icons/ts.svg"
import python from "../src/assets/skills-icons/python.svg"
import docker from "../src/assets/skills-icons/docker.svg"
import prisma from "../src/assets/skills-icons/prisma.svg"
import github from "../src/assets/skills-icons/github.svg"
import sql from "../src/assets/skills-icons/sql.svg"

// Project Icons
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

// Project Images
import Brewery from "././assets/Projects/brewery.webp";
import Greengrocery from "././assets/Projects/online-store.jpg";
import CohortManager from "././assets/Projects/cohortManager2.png";
import Pixabay from "././assets/Projects/pixabay.png";
import ChattApp from "././assets/Projects/chatting-app.png";
import TicTacToe from "././assets/Projects/tic-tac-toe.png";

// Theme related images
import Blue from "././assets/Colors/blue.png";
import BlueViolet from "././assets/Colors/blueViolet-drop.png";
import Green from "././assets/Colors/green.png";
import magenta from "././assets/Colors/magenta.png";
import Orange from "././assets/Colors/orange.png";
import Red from "././assets/Colors/red.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    to: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav-icon" />,
    to: "/about",
  },
  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav-icon" />,
    to: "/projects",
  },
  {
    id: 4,
    name: "Contact",
    icon: <MdContactPhone className="nav-icon" />,
    to: "/contact",
  },
];

export const personalInfos = [
  {
    id: 1,
    title: "Name: ",
    desc: "Ilham Saleh",
  },

  {
    id: 2,
    title: "Prosfession: ",
    desc: "Software Developer",
  },

  {
    id: 3,
    title: "Age: ",
    desc: "27",
  },

  {
    id: 4,
    title: "Phone: ",
    desc: "+447745756106",
  },
  {
    id: 5,
    title: "Nationality: ",
    desc: "Uzbek",
  },
  {
    id: 6,
    title: "Based in: ",
    desc: "London",
  },

  {
    id: 7,
    title: "Email: ",
    desc: "ilham2saleh@gmail.com",
  },

  {
    id: 8,
    title: "Languages: ",
    desc: "English",
  },
];

export const technicalSkills = [
  {
    id: 1,
    icon: <GoBrowser className="logo html-logo" />,
    name: "Front-End",
    desc: "HTML&CSS, JavaScript, React.js...",
    percentage: 78,
  },

  {
    id: 2,
    icon: <TbSettingsCode className="logo css-logo" />,
    name: "Back-End",
    desc: "Node.js, Express.js, PostgreSQL, Prisma...",
    percentage: 65,
  },

  {
    id: 3,
    icon: <IoLibrarySharp className="logo js-logo" />,
    name: "Libraries",
    desc: "TailwindCSS, Chakra-ui, Axios...",
    percentage: 70,
  },

  {
    id: 4,
    icon: <FaLaptopCode className="logo react-logo" />,
    name: "Others",
    desc: "Jest, GitHub, Prisma ORM...",
    percentage: 77,
  },
];

export const otherSkills = [
  {
    id: 1,
    name: "Agile Development",
    percentage: 65,
  },

  {
    id: 2,
    name: "TDD",
    percentage: 70,
  },

  {
    id: 3,
    name: "Communication",
    percentage: 80,
  },

  {
    id: 4,
    name: "Team Work",
    percentage: 90,
  },
];

export const projects = [
  {
    id: 1,
    img: Pixabay,
    title: "Pixebay Clone",
    link: "https://fastidious-pony-8eb347.netlify.app/",
    details: [
      {
        icon: <FaCode />,
        title: "Language",
        desc: "JavaScript, React",
      },
      {
        icon: <FaLink />,
        title: "View App:",
        desc: "Click to see deployed version",
      },
    ],
  },

  {
    id: 2,
    img: ChattApp,
    title: "Social Media App (to be live soon)",
    link: "https://github.com/ilham-saleh/full-stack-project",
    details: [
      {
        icon: <FaCode />,
        title: "Language and Tools:",
        desc: "Javascript, Node, Express, SQL, Prisma, Socket.io",
      },
      {
        icon: <FaLink />,
        title: "View Repo:",
        desc: "Click to see GitHub repo",
      },
    ],
  },

  {
    id: 3,
    img: TicTacToe,
    title: "Next Gen Tic-Tac-Toe",
    link: "https://ilhams-tic-tac-toe.netlify.app/",
    details: [
      {
        icon: <FaCode />,
        title: "Language and Tools:",
        desc: "JavaScript, React",
      },

      {
        icon: <FaLink />,
        title: "View App:",
        desc: "Click to see deployed version",
      },
    ],
  },

  {
    id: 4,
    img: CohortManager,
    title: "Cohort Manager",
    link: "https://github.com/ilham-saleh/react-cohort-dashboard-challenge",
    details: [
      {
        icon: <FaCode />,
        title: "Language:",
        desc: "React.Js/API",
      },

      {
        icon: <FaLink />,
        title: "View Repo:",
        desc: "Click to see GitHub repo",
      },
    ],
  },
  {
    id: 5,
    img: Brewery,
    title: "Brewery App",
    link: "https://github.com/ilham-saleh/js-dom-brewery-tours-challenge",
    details: [
      {
        icon: <FaCode />,
        title: "Language:",
        desc: "JavaScript",
      },

      {
        icon: <FaLink />,
        title: "View Repo:",
        desc: "Click to see GitHub repo",
      },
    ],
  },

  {
    id: 6,
    img: Greengrocery,
    title: "Green Grocery Store",
    link: "https://github.com/ilham-saleh/react-greengrocers",
    details: [
      {
        icon: <FaCode />,
        title: "Language:",
        desc: "React.Js",
      },

      {
        icon: <FaLink />,
        title: "View Repo:",
        desc: "Click to see GitHub repo",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: BlueViolet,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 2,
    img: Blue,
    color: "blue",
  },

  {
    id: 2,
    img: Orange,
    color: "orange",
  },

  {
    id: 3,
    img: Green,
    color: "green",
  },

  {
    id: 4,
    img: magenta,
    color: "magenta",
  },

  {
    id: 1,
    img: Red,
    color: "red",
  },
];


export const skillsIcons = [
  {
    id: 1,
    icon: js,
    name: "JavaScript"
  }, 
  {
    id: 2,
    icon: react,
    name: "React"
  }, 
  {
    id: 3,
    icon: html,
    name: "HTML"
  }, 
  {
    id: 4,
    icon: css,
    name: "CSS"
  }, 
  {
    id: 5,
    icon: tailwind,
    name: "TailwindCSS"
  }, 
  {
    id: 6,
    icon: node,
    name: "Node"
  }, 
  {
    id: 7,
    icon: python,
    name: "Python"
  }, 
  {
    id: 8,
    icon: sql,
    name: "PostgreSQL"
  }, 
  {
    id: 9,
    icon: prisma,
    name: "Prisma ORM"
  }, 

  {
    id: 10,
    icon: ts,
    name: "TypeScript"
  }, 
  {
    id: 11,
    icon: docker,
    name: "Docker"
  }, 

  {
    id: 12,
    icon: github,
    name: "Git/GitHub"
  }, 

]
