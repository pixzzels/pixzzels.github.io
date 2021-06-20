import React from 'react';
import './Home.css';
import pixy from './pixel-line.png'


function Home() {
    return (
        <div className="home-wrapper">
            {/* <img id="pix-1" src={pixy}></img> */}
            {/* <svg className="pix-container">
                <path id="pix-1" strokeWidth="1.3" d="m 0 1 l 0 98"></path>
            </svg> */}
            <div>
                <div id="pix-1"></div>
            </div>

            <div className="home-content-container">
                Hello
            </div>
        </div>
    )
};

export default Home;
