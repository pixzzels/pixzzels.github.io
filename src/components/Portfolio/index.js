import React, { useState } from 'react';

import ggPlays from './ggPlays.png'

import './Portfolio.css';

function Portfolio() {

    const [content, setContent] = useState('')

    return (
        <>
            <div id="portfolio">
                <div className="projects-menu-bar">
                    <div className={"menu-bar menu-bar__react " + (content === 'react' ? "menu-bar-active" : '')} onClick={() => setContent('react')}>React</div>
                    <div className="menu-bar menu-bar__python" onClick={() => setContent('python')}>Python</div>
                    <div className="menu-bar menu-bar__express" onClick={() => setContent('express')}>Express</div>
                    <div className="menu-bar menu-bar__other" onClick={() => setContent('all')}>All</div>
                </div>
                <div className="projects-container">
                    <div className="project-card programmerr">Programmerr</div>
                    <div className="project-card luminno">Luminno</div>
                    <div className="project-card chaos-robinhood">Chaos-Robinhood</div>
                    <div className="project-card ggPlays">
                        <img className="project-card-img" src={ggPlays}></img>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Portfolio;
