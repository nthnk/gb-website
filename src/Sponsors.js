import React from 'react'
import "./Sponsors.css"
import greenhouse from "./Sponsors/greenhouse.png"
import ewbCanada from "./Sponsors/ewbCanada.jpg"
import techo from "./Sponsors/techo.png"
import scihub from "./Sponsors/scihub.png"
import Fade from 'react-reveal/Fade'

function Sponsors() {
    return(
        <div id="sponsors">
            <Fade>
            <div className="sponsorMessage">
                <h1>GreenBricks is proud to be working with the following organizations:</h1>
            </div>
            </Fade>
            <Fade>
            <div className="sponsorLogoParent">
                <div className="sponsorLogoChild">
                    <div className="GHLogoParent">
                        <img id="GHLogoChild" src={greenhouse}/>
                    </div>
                    <div className="ewbLogoParent">
                        <img id="ewbLogoChild" src={ewbCanada}/>
                    </div>
                    <div className="techoLogoParent">
                        <img id="techoLogoChild" src={techo}/>
                    </div>
                    <div className="scihubLogoParent">
                        <img id="scihubLogoChild" src={scihub}/>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Sponsors