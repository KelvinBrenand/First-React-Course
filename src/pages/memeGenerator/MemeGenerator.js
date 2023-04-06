import React from "react";
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import "./style.css"

export default function MemeGenerator(){
    return(
        <div className="meme--main-div">
            <div className="meme--container">
                <Navbar />
                <Form />
            </div>
        </div>
    )
}