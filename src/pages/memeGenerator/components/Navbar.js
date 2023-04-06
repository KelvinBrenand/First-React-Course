import React from "react"
import tf from "../icons/tf.svg"

export default function Navbar(){
    return (
        <nav className="meme--nav">
            <img src={tf} alt="React Logo" className="meme--Nav--icon" />
            <div className="meme--Nav--logo-text">Meme Generator</div>
            <div className="meme--Nav--title">React Course - Project 3</div>
        </nav>
    )
}