import React from "react"
import reactLogo from "../images/react-icon-small.png"

export default function Navbar(){
    return (
        <nav className="rf--nav">
            <img src={reactLogo} alt="React Logo" className="rf--Nav--icon" />
            <div className="rf--Nav--logo-text">ReactFacts</div>
            <div className="rf--Nav--title">React Course - Project 1</div>
        </nav>
    )
}