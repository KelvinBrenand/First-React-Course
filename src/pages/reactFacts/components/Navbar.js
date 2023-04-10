import React from "react"
import reactLogo from "../images/react-icon-small.png"

export default function Navbar(props){
    return (
        <nav className={"rf--nav-"+props.mode}>
            <img src={reactLogo} alt="React Logo" className="rf--Nav--icon" />
            <div className="rf--Nav--logo-text">ReactFacts</div>
            <div className="darkmode">
                <div className="Light" id={"rf--nav-Lighttext-"+props.mode} onClick={props.toggleModeText}>Light</div>
                <div className={"rf--nav-darkmode-square-"+props.mode} onClick={props.toggleModeButton}>
                    <div className={"rf--nav-darkmode-circle-"+props.mode}></div>
                </div>
                <div className="Dark" id={"rf--nav-Darktext-"+props.mode} onClick={props.toggleModeText}> Dark </div>
            </div>
        </nav>
    )
}