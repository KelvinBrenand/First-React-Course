import React from "react"
import hero from "../images/collage.png"

export default function Hero(){
    return (
        <hero className="airbnb--Hero">
            <img src={hero} alt="hero" className="airbnb--hero--image" />
            <div className="airbnb--hero--title">Online Experiences</div>
            <div className="airbnb--hero--description">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</div>
        </hero>
    )
}