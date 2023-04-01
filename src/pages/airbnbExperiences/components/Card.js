import React from "react"
import star from "../icons/star.svg"

export default function Card(props){
    return (
        <div className="airbnb--Card">
            <img src={require(`.././images/${props.img}`)} alt="Card" className="airbnb--Card--img"/>
            <div className="airbnb--Card--status">{props.status}</div>
            <div className="airbnb--Card--rating-row">
                <img src={star} alt="Rating Star" className="airbnb--Card--star"/>
                <div className="airbnb--Card--rating">{props.rating}</div>
                <div className="airbnb--Card--moreInfo">{props.moreInfo}</div>
            </div>
            <div className="airbnb--Card--title">
                {props.title}
            </div>
            <div className="airbnb--Card--price-row">
                <div className="airbnb--Card--price">{props.price}</div>
                 / person
            </div>
        </div>
    )
}