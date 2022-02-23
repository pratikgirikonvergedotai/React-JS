import Main from "./components/Main"
import Navbar from "./components/Navbar"
import React from "react" // to render jsx
import "./style.css" // import css into file to tell to apply it 

export default function App(){
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}