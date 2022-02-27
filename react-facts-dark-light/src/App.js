import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./style.css"

export default function App() {
    // using react state
    const [darkMode, setDarkMode] = React.useState()

    
    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}