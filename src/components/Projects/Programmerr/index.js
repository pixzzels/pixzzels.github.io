import React from 'react';
import programmerrFavicon from './programmerr-favicon.png'

import programmerr1 from './programmerr-1.png';
import programmerr2 from './programmerr-2.png';
import programmerr3 from './programmerr-3.png';
import programmerr4 from './programmerr-4.png';
import programmerr5 from './programmerr-5.png';
import programmerr6 from './programmerr-6.png';
import programmerr7 from './programmerr-7.png';



function Programmerr({ closeModal }) {
    const colors = ["#ff7694", "#2FE6DE", "#F5E0B7", "#8d8de0", "#FF6B6B", "#CBF7ED", "#CA907E", "#FAFAC6"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function changeBackground(e) {
        let number = getRandomInt(5)
        e.target.style.borderColor = colors[number];
        e.target.style.color = "white";

    }

    function changeBackground2(e) {
        e.target.style.borderColor = "#B0B3B8";
        e.target.style.color = "#B0B3B8";
    }

    return (
        <>
            <div className="project-container">
                <div className="project-header-container">
                    <img className="project-favicon" alt="programmerr-favicon" src={programmerrFavicon}></img>
                    <div className="project-header-description">
                        <div className="project-header">
                            <h1>Programmerr</h1>
                            <div>
                                <button className="modal-header-btn">
                                    <a href="https://programmerr.herokuapp.com/">
                                        Live Link
                                    </a>
                                </button>
                                <button className="modal-header-btn">
                                    <a href="https://github.com/pixzzels/Programmerr">GitHub</a>
                                </button>
                                <button className="modal-header-btn" onClick={closeModal}>X</button>
                            </div>
                        </div>
                        <div className="project-description">
                            Programmerr, an almost pixel perfect clone by Fiverr, an online marketplace for freelance services.
                        </div>
                    </div>
                </div>


                <div className="project-technologies">
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>React</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Redux</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Python</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Flask</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>AWS</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Docker</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>AdobeXD</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Flask</div>
                </div>

                <div className="project-images">
                    <div className="project-image-container" style={{ marginLeft: "250px" }}>
                        <img className="project-image" alt="programmerr-img" src={programmerr1}></img>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" alt="programmerr-img" src={programmerr2}></img>
                    </div>

                    <div className="project-image-container">
                        <img className="project-image" alt="programmerr-img" src={programmerr3}></img>
                    </div>

                    <div className="project-image-container">
                        <img className="project-image" alt="programmerr-img" src={programmerr4}></img>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" alt="programmerr-img" src={programmerr5}></img>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" alt="programmerr-img" src={programmerr6}></img>
                    </div>
                    <div className="project-image-container" style={{ marginRight: "250px" }}>
                        <img className="project-image" alt="programmerr-img" src={programmerr7}></img>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Programmerr;