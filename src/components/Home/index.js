import React from 'react';
import './Home.css';
import About from '../../components/About'


function Home() {
    return (
        <div className="home-wrapper">

            <div className="background">
                <div id="pix-1"></div>
            </div>
            <About />
        </div>
    )
};

export default Home;
