import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Programmerr from '../Projects/Programmerr';
import ChaosRobinhood from '../Projects/ChaosRobinhood';
import Luminno from '../Projects/Luminno';
import GGPlays from '../Projects/GGPlays';

import programmerrIcon from '../Projects/Programmerr/programmerr-icon.png';
import luminnoIcon from '../Projects/Luminno/luminno-icon.png';
import chaosRobinhoodIcon from '../Projects/ChaosRobinhood/chaos-robinhood-icon.png';
import ggPlaysIcon from '../Projects/GGPlays/ggplays-icon.png';

import './Portfolio.css';


function Portfolio() {

    const [content, setContent] = useState('')

    const [open, setOpen] = useState(false);

    // let component;
    // // if (isRegister) {
    // component = <Programmerr />

    const cardOverlay = (name, link) => {
        return (
            <div className="project-card-overlay">
                <div className="project-card-overlay__header">
                    {name}
                </div>
                <button className="project-card-overlay__learn-more" onClick={() => setOpen(true)}>Click Here to Learn More!!</button>
                <a className="project-card-overlay__live-link" href={link}>
                    Live Link
                </a>

            </div>
        )
    }

    // let component =
    //     <div className="project-card-overlay">

    //     </div>

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
                    {/* <div className="project-card-shadow"></div> */}
                    {/* <div className="project-card-shadow"></div>
                    <div className="project-card-shadow"></div> */}


                    <div className="project-card programmerr">

                        {cardOverlay("Programmer", "https://programmerr.herokuapp.com/")}

                        <img className="project-card-img" src={programmerrIcon}></img>

                        {open && (
                            <Modal className="login-register-modal" onClose={() => setOpen(false)}>
                                <Programmerr />
                            </Modal>
                        )}
                    </div>
                    <div className="project-card luminno">
                        {cardOverlay("Luminno", "https://luminno.herokuapp.com/")}

                        <img className="project-card-img" src={luminnoIcon}></img>

                        {open && (
                            <Modal className="login-register-modal" onClose={() => setOpen(false)}>
                                <Luminno />
                            </Modal>
                        )}
                    </div>
                    <div className="project-card chaos-robinhood">
                        {cardOverlay("Chaos Robinhood", "https://chaos-robinhood.herokuapp.com/")}

                        <img className="project-card-img" src={chaosRobinhoodIcon}></img>

                        {open && (
                            <Modal className="login-register-modal" onClose={() => setOpen(false)}>
                                <ChaosRobinhood />
                            </Modal>
                        )}
                    </div>
                    <div className="project-card ggPlays">
                        {cardOverlay("GGPlays", "https://ggplays.herokuapp.com/")}

                        <img className="project-card-img" src={ggPlaysIcon}></img>

                        {open && (
                            <Modal className="login-register-modal" onClose={() => setOpen(false)}>
                                <GGPlays />
                            </Modal>
                        )}

                    </div>



                </div>

            </div>
        </>
    )
}

export default Portfolio;
