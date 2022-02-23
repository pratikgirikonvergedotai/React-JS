import React from "react"
import ReactDOM  from "react-dom"
import biglogo from "./biglogo.png"


export default function Main(){
    return (
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>was first released in 2013</li>
                <li>was originally created by jordan walke</li>
                <li>has well over 100k stars on github</li>
                <li>is maintained by facebook</li>
                <li>powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}