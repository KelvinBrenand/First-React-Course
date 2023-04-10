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

    const lightStyle = {
        backgroundColor:"#FFFFFF", left: "2px", top: "1px"
      }
    const darkStyle = {
        backgroundColor:"#222222", left: "12px", top: "1px"
    }

    return(
        <div style={mode === "Light"? {backgroundColor:"#FFFFFF"}:{backgroundColor:"#282D35"}} className="rf--main-div">
            <div className="rf--container">
                <Navbar {...{mode}} />
                <div className="darkmode">
                    <div 
                        style={mode === "Light"? {color:"#2B283A"}:{color:"#918E9B"}} 
                        className="Light" 
                        onClick={toggleModeText}>
                        Light
                    </div>
                    <div 
                        style={mode === "Light"? {backgroundColor:"#2B283A"}:{backgroundColor:"#F5F5F5"}}
                        className="darkmode-square" 
                        onClick={toggleModeButton}>
                        <div style={mode === "Light" ? lightStyle: darkStyle} className="darkmode-circle"></div>
                    </div>
                    <div 
                        style={mode === "Light"? {color:"#D5D4D8"}:{color:"#FFFFFF"}} 
                        className="Dark" 
                        onClick={toggleModeText}>
                        Dark
                    </div>
                </div>
                <Main {...{mode}} />
            </div>
        </div>
    )
}