import React from "react"
import airbnbLogo from "../icons/airbnb-icon.svg"

export default function Navbar(){
    return (
        <nav className="airbnb--Navbar">
            <img src={airbnbLogo} alt="airbnb Logo" className="airbnb--Nav--icon" />
        </nav>
    )
}