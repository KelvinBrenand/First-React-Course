import React from "react";
import { Link } from "react-router-dom"

export default function Main(){
    return(
        <main className="home--Main">
            <div className="home--Main--title">React Projects</div>
            <Link className="home--link" to="/reactfacts">
                <div className="home--Main--projects">React Facts</div>
            </Link>
            <Link className="home--link" to="/digitalbusinesscard">
                <div className="home--Main--projects">Digital Business Card</div>
            </Link>
            <Link className="home--link" to="/airbnbexperiences">
                <div className="home--Main--projects"> Airbnb Experiences</div>
            </Link>
            <Link className="home--link" to="/traveljournal">
                <div className="home--Main--projects"> Travel Journal</div>
            </Link>
        </main>
    )
}