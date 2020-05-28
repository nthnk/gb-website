import React from 'react'
import {ReactComponent as Facebook} from "./Footer/facebook.svg"
import {ReactComponent as Instagram} from "./Footer/instagram.svg"
import "./Footer.css"
import Bounce from 'react-reveal/Bounce'

class Footer extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        window.scrollTo({
            top: document.getElementById(event.target.getAttribute('value')).offsetTop - 0,
            behavior: 'smooth'
        })
        event.preventDefault()
    }
    
    render() {
        return(
            <Bounce bottom>
            <div id="footer">
                <div className="footerChild">
                    <div className="footerContent">
                        <div className="footerLeft">
                            <div className="footerLogoParent">
                                <div className="footerLogoChild">
                                    <div>
                                        <div className="footerLogoActual">
                                            <h1 id="bricksLogo1">Green</h1>
                                            <h1 id="bricksLogo2">Bricks</h1>
                                        </div>
                                        <div className="footerLogoLineParent">
                                            <hr id="footerLogoLineChild"/>
                                        </div>
                                        <div className="footerSlogan">
                                            <h1>Building a</h1><h1 id="footerGreener">greener</h1><h1>world</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footerRight">
                            <div className="footerToolbar">
                                <h1 id="explore">Explore</h1>
                                <div className="footerToolbarList">
                                    <div id="footerAbout">
                                        <p onClick={this.handleChange} value="aboutUsDesc">About</p>
                                    </div>
                                    <div id="footerProduct">
                                        <p onClick={this.handleChange} value="product">Product</p>
                                    </div>
                                    <div id="footerTimeline">
                                        <p onClick={this.handleChange} value="timeline">Timeline</p>
                                    </div>
                                    <div id="footerTeam">
                                        <p onClick={this.handleChange} value="team">Team</p>
                                    </div>
                                    <div id="footerContact">
                                        <a id="footerContactChild" href="mailto:nknathankoo@gmail.com">Contact</a>
                                    </div>
                                </div>
                            </div>
                            <div className="socialMedia">
                                <div className="followUsParent">
                                    <h1 id="followUsChild">Follow Us</h1>
                                </div>
                                <div className="mediaiconsParent">
                                    <div className="facebookParent">
                                        <a target="_blank" href="https://www.facebook.com/GreenBricks-112240647163558/?modal=admin_todo_tour"><Facebook id="facebookChild"/></a>
                                    </div>
                                    <div className="instagramParent">
                                        <a><Instagram id="instagramChild"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerLineParent">
                    <hr id="footerLineChild"/>
                </div>
                <div className="footerCopyright">
                    <p>© 2020 GreenBricks. All Rights Reserved.</p>
                </div>
            </div>
            </Bounce>
        )
    }
}

export default Footer