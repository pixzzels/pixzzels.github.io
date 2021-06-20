import React from 'react';
import { NavLink } from "react-router-dom"
import './Home.css';
import About from '../../components/About'


function Home() {
    return (
        <>
            <div className="name-container sticky-header">
                <span className="oc-tags-nav"> &lt;</span>
                <NavLink exact to="/" className="name">ELLEN</NavLink>
                <span className="oc-tags-nav">&gt;</span>
            </div>


            <div className="home-wrapper">

                <div className="background">
                    <div id="pix-1"></div>
                </div>
                <About />
            </div>
        </>
    )
};

export default Home;
