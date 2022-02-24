import React from "react";
import "../style.css"
import memesData from "../memesData";

// rendering Meme component
function Meme(){
    // for setting initial state
    const [meme, setMeme] = React.useState({
        topText : "" ,
        bottomText: "" ,
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // allMemeImages will have all memes from memesData.js
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // setting memes
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    // handling change after entering the text in input field
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }) )
    }

    return (
        <main>
            <div className="form">
                <input className="form--inputs" placeholder="top text" name="topText" value={meme.topText} onChange={handleChange} type="text" />
                <input  className="form--inputs" placeholder="bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange} type="text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme