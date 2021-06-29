import React from 'react';
import luminnoFavicon from './luminno-favicon.png'

import luminno1 from './luminno-1.png';
import luminno2 from './luminno-2.png';
import luminno3 from './luminno-3.png';
import luminno4 from './luminno-4.png';


function Luminno({ closeModal }) {
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
                    <img className="project-favicon" alt="luminno-favicon" src={luminnoFavicon}></img>
                    <div className="project-header-description">
                        <div className="project-header">
                            <h1>Luminno</h1>
                            <div>
                                <button className="modal-header-btn">
                                    <a href="https://luminno.herokuapp.com/">
                                        Live Link
                                    </a>
                                </button>
                                <button className="modal-header-btn">
                                    <a href="https://github.com/pixzzels/Luminno">GitHub</a>
                                </button>
                                <button className="modal-header-btn" onClick={closeModal}>X</button>
                            </div>
                        </div>
                        <div className="project-description">
                            Luminno is a web application that allows users to see listings, add listings to cart, buy items(simulation). This was inspired by Etsy, a global online marketplace, where people come together to make, sell, buy, and collect unique items. The twist on Luminno is that it is designed for those who succeed on Etsy, and want their own website instead of having it a part of a bigger community.
                        </div>
                    </div>
                </div>


                <div className="project-technologies">
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>React</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Redux</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Express</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>PostgreSQL</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Sequelize.js</div>
                    {/* <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>AWS</div> */}
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Heroku</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>AdobeXD</div>
                </div>

                <div className="project-images">
                    <div className="project-image-container" style={{ marginLeft: "250px" }}>
                        <img className="project-image" alt="luminno-img" src={luminno1}></img>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" alt="luminno-img" src={luminno2}></img>
                    </div>

                    <div className="project-image-container">
                        <img className="project-image" alt="luminno-img" src={luminno3}></img>
                    </div>

                    <div className="project-image-container" style={{ marginRight: "250px" }}>
                        <img className="project-image" alt="luminno-img" src={luminno4}></img>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Luminno;