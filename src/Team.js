import React from 'react'
import "./Team.css"
import marc from "./Team/marc.jpg"
import nathan from "./Team/nathan.jpg"
import lucas from "./Team/lucas.jpg"
import Fade from 'react-reveal/Fade'

function Team() {
    return (
        <div id="team">
            <Fade>
            <div className="teamTitleParent">
                <h1 id="teamTitleChild">Meet the GreenBricks Team</h1>
            </div>
            </Fade>
            <Fade>
            <div className="pictureIconsParent">
                <div className="pictureIconsChild">
                    <div className="marcMirella">
                        <div className="marcPhotoParent">
                            <img id="marcPhotoChild" src={marc}/>
                        </div>
                        <div className="marcNameParentParent">
                            <div className="marcNameParent">
                                <h1 id="marcNameChild">Marc Mirella</h1>
                                <h1 id="marcTitle">Co-Founder & CEO</h1>
                            </div>
                        </div>
                    </div>
                    <div className="nathanKoo">
                        <div className="nathanPhotoParent">
                            <img id="nathanPhotoChild" src={nathan}/>
                        </div>
                        <div className="nathanNameParentParent">
                            <div className="nathanNameParent">
                                <h1 id="nathanNameChild">Nathan Koo</h1>
                                <h1 id="nathanTitle">Co-Founder & CSO</h1>
                            </div>
                        </div>
                    </div>
                    <div className="lucasMoffitt">
                        <div className="lucasPhotoParent">
                            <img id="lucasPhotoChild" src={lucas}/>
                        </div>
                        <div className="lucasNameParentParent">
                            <div className="lucasNameParent">
                                <h1 id="lucasNameChild">Lucas Moffitt</h1>
                                <h1 id="lucasTitle">Product Researcher</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Team