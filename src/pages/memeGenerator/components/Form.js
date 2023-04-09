import React, {useState, useEffect} from "react"
import frame from "../icons/frame.svg"

export default function Form(){

    const [meme, setMeme] = useState({topText:"", bottomText:"", randomImage:"https://i.imgflip.com/23ls.jpg"})
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemes(data.data.memes))}, [])
    function getImage(){
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({...prevMeme, randomImage:url}))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({...prevMeme, [name]:value.toUpperCase()}))
    }

    return (
        <div className="meme--form">
            <div>
                <input 
                    className="meme--form-inputs"
                    name="topText" 
                    type="text" 
                    placeholder="Top text" 
                    id="input1" 
                    onChange={handleChange} 
                    value={meme.topText}
                />
                <input 
                    className="meme--form-inputs"
                    name="bottomText"  
                    type="text" 
                    placeholder="Bottom text" 
                    id="input2" 
                    onChange={handleChange} 
                    value={meme.bottomText}
                />
            </div>
            <button className="meme--form-button" onClick={getImage}>
                Get a new meme image
                <img className="meme--form-frame" src={frame} alt=""/>
            </button>
            <div className="meme--form-img-div">
                <img className="meme--form-img" src={meme.randomImage} alt="" />
                <div className="meme--form-topText">{meme.topText}</div>
                <div className="meme--form-bottomText">{meme.bottomText}</div>
            </div>
        </div>
    )
}