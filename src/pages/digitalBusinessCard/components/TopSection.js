import React from "react"
import pic from "../profile-pic/Laura-Smith.png"
import mail from "../icons/mail.svg"
import linkedin from "../icons/linkedin.svg"

export default function TopSection(){
    return(
        <div className="dbc--TopSection">
            <img src={pic} alt="Profile" className="dbc--TopSection--pic"/>
            <div className="dbc--TopSection--name">Laura Smith</div>
            <div className="dbc--TopSection--description">Frontend Developer</div>
            <div className="dbc--TopSection--website">laurasmith.website</div>
            
            <div className="dbc--TopSection--Buttons">
                <button className="dbc--TopSection--email-button"> <img src={mail} alt="Mail Icon" className="dbc--Mail-Icon"/> Email</button>
                <button className="dbc--TopSection--linkedin-button"> <img src={linkedin} alt="Linkedin Icon" className="dbc--Linkedin-Icon"/> LinkedIn</button>
            </div>
        </div>
    )
}