import React, { useState } from "react";
import Navbar from "./components/Navbar.js"
import Main from "./components/Main.js"
import "./style.css"

export default function ReactFacts(){
    const [mode, setMode] = useState("Light")

    function toggleModeButton(){
        setMode(prevMode => prevMode === "Light" ? "Dark":"Light")
    }
    function toggleModeText(event){
        setMode(function(prevMode){
            if (prevMode === "Light") {
                return event.target.className === "Light" ? "Light":"Dark"

            } else {
                return event.target.className === "Light" ? "Light":"Dark"
            }
        })
    }

    return(
        <div className={"rf--main-div-"+mode}>
            <div className="rf--container">
                <Navbar mode={mode} toggleModeButton ={toggleModeButton} toggleModeText={toggleModeText} />
                <Main mode={mode} />
            </div>
        </div>
    )
}