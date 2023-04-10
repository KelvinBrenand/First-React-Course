import React from "react"
import reactLogo from "../images/react-icon-small.png"

export default function Navbar(props){
    return (
        <nav style={props.mode === "Light"? {backgroundColor:"#FFFFFF", boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)"}:{backgroundColor:"#21222A"}} className="rf--nav">
            <img src={reactLogo} alt="React Logo" className="rf--Nav--icon" />
            <div className="rf--Nav--logo-text">ReactFacts</div>
        </nav>
    )
}