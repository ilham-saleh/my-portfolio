import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import links from "../../data";

import './Navbar.css'

import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const [displayNone, setDisplayNone] = useState(false)


    return (
        <nav className="nav-container">
            <div className={showNav ? "nav-menu show-nav" : "nav-menu"} >
                <ul className="nav-list">
                  {links.map((link) => (
                    <li key={link.id}> 
                        <NavLink className={(({isActive}) => isActive ? "nav-link active" : "nav-link")} to={link.to} onClick={() => setShowNav(!showNav)}>
                            {link.icon}
                            <h3 className="nav-name">{link.name}</h3>
                        </NavLink>
                    </li>
                  ))}
                </ul>
            </div>

            <div className="nav-toggle" onClick={() => {
                setShowNav(!showNav)
                setDisplayNone(!displayNone)
            }}>
                {!showNav ? <IoMdMenu className="toggle-icon"/> : <FaTimes className="toggle-icon"/>}
            </div>
        </nav>
    )
}

export default Navbar