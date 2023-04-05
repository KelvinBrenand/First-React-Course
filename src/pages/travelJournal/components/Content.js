import React from "react"
import Card from "./Card"
import data from "../data"

export default function Content(){
    const cards = data.map(item => <Card {...item}/>)
    return(
        <div className="travel--Content">
            {cards}
        </div>
    )
}