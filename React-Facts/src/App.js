// importing Main and Navbar component
import Main from "./components/Main"
import Navbar from "./components/Navbar"
// importing react 
import React from "react" 
// importing our style
import "./style.css"  


// exporting App component
export default function App(){
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}