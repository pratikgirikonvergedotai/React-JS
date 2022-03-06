import React from "react"
import '../App.css'
import github from './github-logo.png'
import twitter from './twitter-logo.png'


export default function Links(){
    return (
        <div className="card-links">
            <a href="#"><img src={github} width="50px" height="50px" /></a>
            <a href="#"><img src={twitter} width="50px" height="50px" /></a>
        </div>
    )
}