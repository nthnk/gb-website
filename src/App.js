import React from "react"
import Toolbar from "./Toolbar"
import AboutUs from "./AboutUs"
import Products from './Products'
import Timeline from './Timeline'
import Team from './Team'
import Sponsors from './Sponsors'
import Footer from "./Footer"
import "./App.css"

function App() {
    return(
        <div className="website">
            <div className="websiteTitle">
                <Toolbar/>
                <AboutUs/>
            </div>
            <div className="websiteBody">
                <Products/>
                <Timeline/>
                <Team/>
                <Sponsors/>
                <Footer/>
            </div>
        </div>
    )
}

export default App