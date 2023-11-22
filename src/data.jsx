import React from "react";

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

 const links = [
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

export default links