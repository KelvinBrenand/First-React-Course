import React from "react"
import world from "../icons/world.svg"

export default function Navbar(){
    return (
        <nav className="travel--Navbar">
            <img src={world} alt="travel Logo" className="world--Nav--icon" />
            <div className="world--Nav--Text">my travel journal.</div>
        </nav>
    )
}