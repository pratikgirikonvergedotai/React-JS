import React from "react";




export default function Content(props){
    return (
        <div>
            <img className="card-image" src={`./images/${props.url}`}  alt='profile' width="200px" height="100px"/>
            <div className='card-about'>
                <h4>About</h4>
                <p>{props.info}</p>
            </div>
        </div>
    )
}