import React, {useState} from "react"
import frame from "../icons/frame.svg"
import data from "../memesData.js"

export default function Form(){

    const [meme, setMeme] = useState({topText:"", bottomText:"", randomImage:"https://i.imgflip.com/23ls.jpg"})
    const [allMemeImages, setAllMemeImages] = useState(data)
    const memesArray = allMemeImages.data.memes

    function getImage(){
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({...prevMeme, randomImage:url}))
    }

    return (
        <div className="meme--form">
            <div>
                <input className="meme--form-inputs" type="text" placeholder="Top text" id="input1"/>
                <input className="meme--form-inputs" type="text" placeholder="Bottom text" id="input2"/>
            </div>
            <button className="meme--form-button" onClick={getImage}>
                Get a new meme image
                <img className="meme--form-frame" src={frame} alt=""/>
            </button>
            <img className="meme--form-img" src={meme.randomImage} alt="" />
        </div>
    )
}