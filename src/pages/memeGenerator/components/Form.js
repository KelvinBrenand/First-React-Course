import React, {useState} from "react"
import frame from "../icons/frame.svg"
import data from "../memesData.js"

export default function Form(){
    const [memeImage, setMemeImage] = useState("")
    const memesArray = data.data.memes

    function getImage(){
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <div className="meme--form">
            <div>
                <input className="meme--form-inputs" type="text" placeholder="Header" id="input1"/>
                <input className="meme--form-inputs" type="text" placeholder="Bottom" id="input2"/>
            </div>
            <button className="meme--form-button" onClick={getImage}>
                Get a new meme image
                <img className="meme--form-frame" src={frame} alt=""/>
            </button>
            <img className="meme--form-img" src={memeImage} alt="" />
        </div>
    )
}