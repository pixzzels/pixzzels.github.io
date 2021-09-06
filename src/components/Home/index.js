import React from 'react';
import { NavLink } from 'react-router-dom';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';


import './Home.css';


function Home() {
    return (
        <>
            <div className="background">
                <div id="pix-1"></div>
                <div id="pix-2"></div>
                <div id="pix-3"></div>
                <div id="pix-4"></div>
                <div id="pix-5"></div>



            </div>
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


                <About />
                <Portfolio />
                <Contact />
            </div>
        </>
    )
};

export default Home;
