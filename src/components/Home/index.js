import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';


import './Home.css';


function Home() {
    return (
        <>
            <nav className="nav-container">

                <div className="category-container">
                    <Link className="category-link" to="about">About</Link>
                    <NavLink className="category-link" to="/projects">Portfolio</NavLink>
                    <NavLink className="category-link" to="/contact">Contact</NavLink>

                </div>
            </nav>
            <div className="name-container sticky-header">
                <span className="oc-tags-nav"> &lt;</span>
                <NavLink exact to="/" className="name">ELLEN</NavLink>
                <span className="oc-tags-nav">&gt;</span>
            </div>
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
