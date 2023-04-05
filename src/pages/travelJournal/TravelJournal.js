import React from "react";
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import "./style.css"

export default function TravelJournal(){
    return(
        <div className="travel--container">
            <Navbar />
            <Content />
        </div>
    )
}