import React from 'react'
import "./Timeline.css"
import Fade from 'react-reveal/Fade'

function Timeline() {
    return(
        <div id="timeline">
            <Fade>
            <div className="timelineTitleParent">
                <h1 id="timelineTitle">Milestones & Looking Ahead</h1>
            </div>
            </Fade>
            <div className="timelineIconsParent">
                <div className="timelineIconsChild">
                    <Fade>
                    <div className="row1">
                        <div className="march">
                            <div className="marchIconParent">
                                <div className="marchIcon">
                                    <p id="marchDesc">Secured workspace in Sci-Hub</p>
                                </div>
                            </div>
                            <div>
                                <h1 id="marchTitle">March 2020</h1>
                            </div>
                        </div>
                        <div className="Arrow">
                            <i className="right"></i>
                        </div>
                        <div className="april">
                            <div className='aprilIconParent'>
                                <div className="aprilIcon">
                                    <p id="aprilDesc">$1K grant from Social Impact Fund</p>
                                </div>
                            </div>
                            <div>
                                <h1 id="aprilTitle">April 2020</h1>
                            </div>
                        </div>
                        <div className="Arrow">
                            <i className="right"></i>
                        </div>
                        <div className="may">
                            <div className="mayIconParent">
                                <div className="mayIcon">
                                    <p id="mayDesc">$5K grant from E-Launch Fund</p>
                                </div>
                            </div>
                            <div>
                                <h1 id="mayTitle">May 2020</h1>
                            </div>
                        </div>
                        <div className="Arrow">
                            <i className="right"></i>
                        </div>
                        <div className="june">
                            <div className="juneIconParent">
                                <div className="juneIcon">
                                    <p id="juneDesc">Collect & find plastic sources</p>
                                </div>
                            </div>
                            <div>
                                <h1 id="juneTitle">June 2020</h1>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade>
                    <div className="row2">
                        <div className="current">
                            <div className="currentIconParent">
                                <div className="currentIcon">
                                    <p id="currentDesc">Prototyping begins!</p>
                                </div>
                            </div>
                            <div>
                                <h1 id="currentTitle">Current</h1>
                            </div>
                        </div>
                        <div className="Arrow">
                            <i className="right"></i>
                        </div>
                        <div className="august">
                            <div className='augustIconParent'>
                                <div className="augustIcon">
                                    <p id="augustDesc">Established relationship with first client</p>
                                </div>
                            </div>
                            <div>
                                <h1 id="augustTitle">August 2020</h1>
                            </div>
                        </div>
                        <div className="Arrow">
                            <i className="right"></i>
                        </div>
                        
                        <div className="october">
                            <div className="octoberIconParent">
                                <div className="octoberIcon">
                                    <p id="octoberDesc">Complete first prototype: garden shed</p>
                                </div>
                            </div>
                            <div>
                                <h1 id="octoberTitle">October 2020</h1>
                            </div>
                        </div>
                        <div className="Arrow">
                            <i className="right"></i>
                        </div>
                        <div className="newYear">
                            <div className="newYearIconParent">
                                <div className="newYearIcon">
                                    <p id="newYearDesc">Open first factory in Peru</p>
                                </div>
                            </div>
                            <div>
                                <h1 id="nextYearTitle">2021</h1>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Timeline