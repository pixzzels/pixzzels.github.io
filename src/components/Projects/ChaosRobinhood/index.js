import React from 'react';
import robinhoodFavicon from './robinhood-favicon.png'

import robinhood1 from './robinhood-1.png';
import robinhood2 from './robinhood-2.png';
// import robinhood3 from './robinhood-3.png';
// import robinhood4 from './robinhood-4.png';
// import robinhood5 from './robinhood-5.png';
// import robinhood6 from './robinhood-6.png';
// import robinhood7 from './robinhood-7.png';


function ChaosRobinhood({ closeModal }) {
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
                    <img className="project-favicon" alt="robinhood-favicon" src={robinhoodFavicon}></img>
                    <div className="project-header-description">
                        <div className="project-header">
                            <h1>Robinhood</h1>
                            <div>
                                <button className="modal-header-btn">
                                    <a href="https://chaos-robinhood-app.herokuapp.com/">
                                        Live Link
                                    </a>
                                </button>
                                <button className="modal-header-btn">
                                    <a href="https://github.com/pixzzels/Robinhood">GitHub</a>
                                </button>
                                <button className="modal-header-btn" onClick={closeModal}>X</button>
                            </div>
                        </div>
                        <div className="project-description">
                            Chaos-Robinhood, a clone of Robinhood, a platform for commission-free trades of stocks and exchange-traded funds.
                        </div>
                    </div>
                </div>


                <div className="project-technologies">
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>React</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Redux</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Python</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Flask</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>SQLAlchemy</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>IEDCloud API</div>
                    {/* <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>AWS</div> */}
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Docker</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Heroku</div>
                    <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>AdobeXD</div>
                    {/* <div className="project-technology" onMouseOver={changeBackground} onMouseLeave={changeBackground2}>Flask</div> */}
                </div>

                <div className="project-images">
                    <div className="project-image-container" style={{ marginLeft: "250px" }}>
                        <img className="project-image" alt="robinhood-img" src={robinhood1}></img>
                    </div>
                    <div className="project-image-container" style={{ marginRight: "250px" }}>
                        <img className="project-image" alt="robinhood-img" src={robinhood2}></img>
                    </div>

                    {/* <div className="project-image-container">
                        <img className="project-image" src={robinhood3}></img>
                    </div>

                    <div className="project-image-container">
                        <img className="project-image" src={robinhood4}></img>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" src={robinhood5}></img>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" src={robinhood6}></img>
                    </div>
                    <div className="project-image-container" style={{ marginRight: "250px" }}>
                        <img className="project-image" src={robinhood7}></img>
                    </div> */}
                </div>
            </div>
        </>
    )
};

export default ChaosRobinhood;