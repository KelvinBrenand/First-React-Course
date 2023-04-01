import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import Bottom from "./components/Bottom"
import "./style.css"

export default function AirbnbExperiences(){
    return(
        <div className="airbnb--container">
            <Navbar />
            <Hero />
            <Bottom />
        </div>
    )
}