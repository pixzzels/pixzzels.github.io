import React from 'react';
import programmerrFavicon from './programmerr-favicon.png'

import './Programmerr.css';

function Programmerr() {
    return (
        <>
            <div className="project-container">
                <div className="project-header-container">
                    <img className="project-favicon" src={programmerrFavicon}></img>
                    <div className="project-header">
                        <h1>Programmerr</h1>
                        <div className="project-description">
                            Programmerr, an almost pixel perfect clone by Fiverr, an online marketplace for freelance services.
                        </div>
                    </div>
                </div>
                <div className="project-technologies">
                    <div className="project-technology">React</div>
                </div>

                <div className="project-images">

                </div>
            </div>
        </>
    )
};

export default Programmerr;