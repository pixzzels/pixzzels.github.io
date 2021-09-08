import React from 'react';
import luminnoFavicon from './ggPlays-favicon.png'
import { Carousel } from '3d-react-carousal';

import ggplays1 from './ggplays-1.png';
import ggplays2 from './ggplays-2.png';
import ggplays3 from './ggplays-3.png';
import ggplays4 from './ggplays-4.png';
import ggplays5 from './ggplays-5.png';
import ggplays6 from './ggplays-6.png';
import ggplays7 from './ggplays-7.png';


function GGPlays({ closeModal }) {
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

    let slides = [
        <img className="project-image" alt="ggplays-img1" src={ggplays1}></img>,
        <img className="project-image" alt="ggplays-img2" src={ggplays2}></img>,
        <img className="project-image" alt="ggplays-img3" src={ggplays3}></img>,
        <img className="project-image" alt="ggplays-img4" src={ggplays4}></img>,
        <img className="project-image" alt="ggplays-img5" src={ggplays5}></img>,
        <img className="project-image" alt="ggplays-img6" src={ggplays6}></img>,
        <img className="project-image" alt="ggplays-img7" src={ggplays7}></img>,
    ]

    return (
        <>
            <div className="project-container">
                <div className="project-header-container">
                    <img className="project-favicon" alt="luminno-favicon" src={luminnoFavicon}></img>
                    <div className="project-header-description">
                        <div className="project-header">
                            <h1>ggPlays</h1>
                            <div>
                                <button className="modal-header-btn">
                                    <a href="https://ggplays.herokuapp.com/">
                                        Live Link
                                    </a>
                                </button>
                                <button className="modal-header-btn">
                                    <a href="https://github.com/Hieu-Ma/ggplays">GitHub</a>
                                </button>
                                <button className="modal-header-btn" onClick={closeModal}>X</button>
                            </div>
                        </div>
                        <div className="project-description">
                            ggPlays is a web application that allows users to view various video games, publish game reviews, and catalog games into game shelves that can be customized. This was inspired by Goodreads, a website where individuals can search for books, create reviews, catalog books into libraries, discuss all things books, and more.                        </div>
                    </div>
                </div>


                <div className="project-technologies">
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Node.js</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Express</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Pug</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>PostgreSQL</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Sequelize.js</div>
                    {/* <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>AWS</div> */}
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Heroku</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>AdobeXD</div>
                </div>

                <div className="project-images">
                    <Carousel slides={slides} autoplay={false} />
                    {/* <div className="project-image-container" style={{ marginLeft: "250px" }}>
                        <img className="project-image" alt="luminno-img" src={ggplays1}></img>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" alt="luminno-img" src={ggplays2}></img>
                    </div>

                    <div className="project-image-container">
                        <img className="project-image" alt="luminno-img" src={ggplays3}></img>
                    </div>

                    <div className="project-image-container">
                        <img className="project-image" alt="luminno-img" src={ggplays4}></img>
                    </div>

                    <div className="project-image-container">
                        <img className="project-image" alt="luminno-img" src={ggplays5}></img>
                    </div>

                    <div className="project-image-container">
                        <img className="project-image" alt="luminno-img" src={ggplays6}></img>
                    </div>

                    <div className="project-image-container" style={{ marginRight: "250px" }}>
                        <img className="project-image" alt="luminno-img" src={ggplays7}></img>
                    </div> */}

                </div>
            </div>
        </>
    )
};

export default GGPlays;