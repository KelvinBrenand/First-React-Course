import React from "react"

export default function Main(props){
    const lightStyle = {
        backgroundColor:"#FFFFFF",
        color:"#2B283A",
        backgroundImage: 'url('+require('../images/light-react-icon-large.png') +')'
      }
    const darkStyle = {
        backgroundColor:"#282D35",
        color: "#FFFFFF",
        backgroundImage: 'url('+require('../images/dark-react-icon-large.png') +')'
    }

    return(
        <main style={props.mode === "Light" ? lightStyle: darkStyle} className="rf--main">
            <div className="rf--Main--title">Fun facts about React</div>
            <ul className="rf--ul">
                <li className="rf--li">Was first released in 2013</li>
                <li className="rf--li">Was originally creted by Jordan Walke</li>
                <li className="rf--li">Has well over 100k stars on GitHub</li>
                <li className="rf--li">Is maintained by Facebook</li>
                <li className="rf--li">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}