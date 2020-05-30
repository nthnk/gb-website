import React from 'react'
import "./AboutUs.css"
import Fade from 'react-reveal/Fade'
import CountUp from "react-countup"

function AboutUs() {
    return(
        <div id="About">
            <Fade>
                <div id="AboutUs">
                    <div className="plasticProblem">
                        <div className="Fact1"> 
                            <CountUp start={0} end={90} duration={7} delay={0}/>
                            <p>%</p>
                        </div>
                        <div className="Fact1Desc">
                            <p id="plasticProblemDesc">of plastics produced won't be recycled</p>
                        </div>
                    </div>
                    <div className="housingProblem">
                        <div className="Fact2"> 
                            <CountUp start={0} end={1.6} decimals={1} duration={7}/>
                            <p id="billion">billion</p>
                        </div>
                        <div className="Fact2Desc">
                            <p id="housingProblemDesc">people lack adequate housing worldwide</p>
                        </div>
                    </div>
                </div>
            </Fade>
            <div id="aboutUsDesc">
                <Fade>
                    <div className="slogan">
                        <h1 id="slogan1">Building a</h1><h1 id="greener">greener</h1><h1 id="slogan2"> world. Brick by Brick.</h1>    
                    </div>
                </Fade>
                <Fade>
                    <div className="gbDesc">
                        <p id="gbDescParagraph">A large abundance of recycled plastics remain with no use and each year this pile of waste continues to 
                            grow. GreenBricks brings back the value in these plastics by remolding plastic waste into strong,
                            affordable, and sustainable house building materials. 
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default AboutUs