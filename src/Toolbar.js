import React from 'react'
import "./Toolbar.css"

class Toolbar extends React.Component {
    constructor() {
        super()
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        window.scrollTo({
            top: document.getElementById(e.target.getAttribute('value')).offsetTop - 0,
            behavior: "smooth"
        })
    }
    
    render() {
        return(
            <div id="Toolbar">
                <div className="logoHome">
                    <a href="." id="logo">GreenBricks</a>
                </div>
                <div className="toolbarItems">
                    <div id="aboutTB">
                        <h1 onClick={this.changeHandler} value="aboutUsDesc" id="aboutLink">About</h1>
                    </div>
                    <div id="productTB">
                        <h1 onClick={this.changeHandler} value="product" id="productLink">Product</h1>
                    </div>
                    <div id="timelineTB">
                        <h1 onClick={this.changeHandler} value="timeline" id="timelineLink">Timeline</h1>
                    </div>
                    <div id="teamTB">
                        <h1 onClick={this.changeHandler} value="team" id="teamLink">Team</h1>
                    </div>
                    <div id="contactTB">
                        <a href="mailto:nknathankoo@gmail.com" id="email">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Toolbar