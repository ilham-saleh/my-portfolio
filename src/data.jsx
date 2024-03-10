import React from "react";

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
// import { IoSchoolOutline } from "react-icons/io5";
// import { FaRegFileAlt } from "react-icons/fa";

import Brewery from "././assets/Projects/brewery.webp";
import Greengrocery from "././assets/Projects/online-store.jpg";
import CohortManager from "././assets/Projects/cohortManager2.png";
import Pixabay from "././assets/Projects/pixabay.png";
import ChattApp from "././assets/Projects/chatting-app.png";
import TicTacToe from "././assets/Projects/tic-tac-toe.png";

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
    icon: <FaHtml5 className="logo html-logo" />,
    name: "HTML",
    percentage: 70,
  },

  {
    id: 2,
    icon: <FaCss3Alt className="logo css-logo" />,
    name: "CSS",
    percentage: 65,
  },

  {
    id: 3,
    icon: <IoLogoJavascript className="logo js-logo" />,
    name: "JavaScript",
    percentage: 60,
  },

  {
    id: 4,
    icon: <FaReact className="logo react-logo" />,
    name: "React",
    percentage: 70,
  },

  {
    id: 5,
    icon: <FaGitAlt className="logo git-logo" />,
    name: "Git/GitHub",
    percentage: 60,
  },
];

export const otherSkills = [
  {
    id: 1,
    name: "Data/APIs",
    percentage: 75,
  },

  {
    id: 2,
    name: "Creativity",
    percentage: 85,
  },

  {
    id: 3,
    name: "Communication",
    percentage: 68,
  },

  {
    id: 4,
    name: "Team Work",
    percentage: 80,
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
    id: 31,
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
    id: 4,
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
  {
    id: 5,
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
    id: 6,
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
// export default links
