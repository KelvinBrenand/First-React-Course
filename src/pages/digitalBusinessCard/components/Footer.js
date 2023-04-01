import React from "react"
import twitter_icon from "../icons/twitter.svg"
import facebook_icon from "../icons/facebook.svg"
import instagram_icon from "../icons/instagram.svg"
import github_icon from "../icons/github.svg"

export default function Footer(){
    return(
        <div className="dbc--Footer">
            <img className="dbc--Footer--icon" src={twitter_icon} alt="twitter icon" />
            <img className="dbc--Footer--icon" src={facebook_icon} alt="facebook icon" />
            <img className="dbc--Footer--icon" src={instagram_icon} alt="instagram icon" />
            <img className="dbc--Footer--icon" src={github_icon} alt="github icon" />
        </div>
    )
}