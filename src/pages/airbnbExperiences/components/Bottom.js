import React from "react"
import Card from "./Card"
import data from "../data"

export default function Bottom(){
    const cards = data.map(item => {
        return(
            <Card
            img={item.img}
            status={item.status}
            rating={item.rating}
            moreInfo={item.moreInfo}
            title={item.title}
            price={item.price}
            />
        )
    })
    return(
        <div className="airbnb--Bottom">
            {cards}
        </div>
    )
}