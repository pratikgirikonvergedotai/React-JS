import React from "react"
import "../style.css"
import logo from "./react-icon-small.png"

// render Navabar component
export default function Navbar(props) {
    return (
         <nav
             // condition render value for css
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src={logo}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}