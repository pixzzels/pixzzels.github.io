import React from 'react';
import { NavLink } from 'react-router-dom';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';


import './Home.css';


function Home() {
    return (
        <>
            <nav className="nav-container sticky-header">
                <div className="name-container">
                    <span className="oc-tags-nav"> &lt;</span>
                    <NavLink exact to="/" className="name">ELLEN</NavLink>
                    <span className="oc-tags-nav">&gt;</span>
                </div>

                <div className="category-container">
                    <a className="category-link" href="#portfolio">Portfolio</a>
                    <a className="category-link" href="#contact">Contact</a>

                </div>
            </nav>
            {/* <Navigation /> */}


            <div className="home-wrapper">

                <div className="background">
                    {/* <div id="pix-1"></div> */}
                </div>
                <About />
                <Portfolio />
                <Contact />
            </div>
        </>
    )
};

export default Home;
