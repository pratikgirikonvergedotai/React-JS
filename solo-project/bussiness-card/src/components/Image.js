import React from 'react'
import '../App.css'
import profile from "./profile.jpg"


export default function Image(){
    return (
        <div className='card-image'>
            <img src={profile}  alt='profile' width="100px" height="100px" />
        </div>
    )
}