import React from "react"
import map from "../icons/map.svg"

export default function Card(props){
    return (
        <div className="travel--Card">
            <img src={props.imageUrl} alt="Card" className="travel--Card--img"/>
            <div className="travel--Card-info">
                <div className="travel--Card-firstRow">
                    <img src={map} alt="Card" className="travel--Card--map"/>
                    <div className="travel--Card--location">{props.location.toUpperCase()}</div>
                    <a href={props.googleMapsUrl} target="to _blank">View on Google Maps</a>
                </div>
                <div className="travel--Card--title">{props.title}</div>
                <div className="travel--Card--date">{props.startDate} - {props.endDate}</div>
                <div className="travel--Card--description">{props.description}</div>
            </div>
        </div>
    )
}