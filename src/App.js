import React from "react"
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {HashRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/home/Home.js"
import ReactFacts from "./pages/reactFacts/ReactFacts.js"
import DigitalBusinessCard from "./pages/digitalBusinessCard/DigitalBusinessCard.js"
import AirbnbExperiences from "./pages/airbnbExperiences/AirbnbExperiences.js"

export default function App(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/reactfacts' element={<ReactFacts />} />
                <Route path='/digitalbusinesscard' element={<DigitalBusinessCard />} />
                <Route path='/airbnbexperiences' element={<AirbnbExperiences />} />
            </Routes>
        </Router>
    )
}