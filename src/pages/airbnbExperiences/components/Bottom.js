import React from "react"
import Card from "./Card"
import data from "../data"

export default function Bottom(){
    const cards = data.map(item => <Card {...item}/>)
    return(
        <div className="airbnb--Bottom">
            {cards}
        </div>
    )
}