import React from "react";
import Navbar from "./components/Navbar.js"
import Main from "./components/Main.js"
import "./style.css"

export default function ReactFacts(){
    return(
        <div className="rf--main-div">
            <div className="rf--container">
                <Navbar />
                <Main />
            </div>
        </div>
    )
}