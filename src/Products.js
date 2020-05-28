import React from 'react'
import "./Product.css"
import {ReactComponent as BrickImage} from './Products/brick.svg'
import {ReactComponent as ScrewImage} from './Products/screw.svg'
import {ReactComponent as RoofImage} from './Products/roof.svg'
import Fade from 'react-reveal/Fade'

function Products() {
    return(
        <div id="product">
            <Fade>
            <div className="productTitle">
                <h1 id="productTitleDesc">Our Products</h1>
            </div>
            </Fade>
            <Fade>
            <div className="productIconsParent">
                <div className="productIcons">
                    <div className="brickIcon">
                        <div className="brickImageParent">
                            <div className="brickImage">
                                <BrickImage id="brick"/>
                            </div>
                        </div>
                        <p id="brickTitle">GreenBricks</p>
                    </div>
                    <div className="screwIcon">
                        <div className="screwImageParent">
                            <div className="screwImage">
                                <ScrewImage id="screw"/>
                            </div>
                        </div>
                        <p id="screwTitle">GreenScrews</p>
                    </div>
                    <div className="roofIcon">
                        <div className="roofImageParent">
                            <div className="roofImage">
                                <RoofImage id="roof"/>
                            </div>
                        </div>
                        <p id="roofTitle">GreenRoofing</p>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade>
            <div>
                <h1 id="productClose">Please contact us for more information on our products.</h1>
            </div>
            </Fade>
        </div>
        
    )
}

export default Products