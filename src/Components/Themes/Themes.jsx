import { themes} from "../../data";
import './Themes.css'

import {useState, useEffect} from 'react'

import ThemeItem from "./ThemeItem";

import { FaCog } from "react-icons/fa";
import {BsSun, BsMoon} from 'react-icons/bs'

const getLocalStorageColor = () => {
    let color = 'hsl(271, 76%, 53%)'

    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color')
    }

    return color
}

const getLocalStorageTheme = () => {
    let theme = 'light-theme'

    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }

    return theme
}

export default function Themes() {
    const [showSwitcher, setShowSwitcher] = useState(false)

    const [color, setColor] = useState(getLocalStorageColor())

    const [theme, setTheme] = useState(getLocalStorageTheme())

    const changeColor = (color) => {
        setColor(color)
        localStorage.setItem('color', color)
    }

    const toggleTheme = () => {
        if (theme === 'light-theme'){
            setTheme('dark-theme')
        }else {
            setTheme('light-theme')
        }
 
        console.log(theme)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', color);
    }, [color])

    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style-switcher`}>
                <div className="style-switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                    <FaCog />
                </div>

                <div className="theme-toggler" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                <h3 className="style-switcher-title">Swtich Style</h3>

                <div className="style-switcher-items">
                    {themes.map((theme, index) => (
                        <ThemeItem key={index} {...theme} changeColor={changeColor}/>
                    ))}
                </div>

                <div onClick={() => setShowSwitcher(!showSwitcher)}className="style-switcher-close">&times;</div>
            </div>
        </div>
    )
}