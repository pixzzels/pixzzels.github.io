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

    const [content, setContent] = useState('all')
    const [project, setProject] = useState('')


    const closeModal = () => {
        setProject(false)
    }
    // let component;
    // // if (isRegister) {
    // component = <Programmerr />

    const cardOverlay = (name, link) => {
        return (
            <div className="project-card-overlay">
                <div className="project-card-overlay__header">
                    {name}
                </div>
                <button className="project-card-overlay__learn-more" onClick={() => setProject(name)}>Click Here to Learn More!!</button>
                <a className="project-card-overlay__live-link" href={link}>
                    Live Link
                </a>

            </div>
        )
    }

    const programmerr =
        <div className="project-card programmerr">
            {cardOverlay("Programmerr", "https://programmerr-app.herokuapp.com/")}

            <img className="project-card-img" alt="programmerr-icon" src={programmerrIcon}></img>

            {project === "Programmerr" && (
                <Modal className="project-modal" onClose={() => closeModal()}>
                    <Programmerr closeModal={closeModal} />
                </Modal>
            )}
        </div>

    const luminno =
        <div className="project-card luminno">
            {cardOverlay("Luminno", "https://luminno-app.herokuapp.com/")}

            <img className="project-card-img" alt="luminno-icon" src={luminnoIcon}></img>

            {project === 'Luminno' && (
                <Modal className="project-modal-modal" onClose={() => closeModal()}>
                    <Luminno closeModal={closeModal} />
                </Modal>
            )}
        </div>

    const robinhood =
        <div className="project-card chaos-robinhood">
            {cardOverlay("Chaos Robinhood", "https://chaos-robinhood-app.herokuapp.com/")}

            <img className="project-card-img" alt="robinhood-icon" src={chaosRobinhoodIcon}></img>

            {project === 'Chaos Robinhood' && (
                <Modal className="project-modal-modal" onClose={() => closeModal()}>
                    <ChaosRobinhood closeModal={closeModal} />
                </Modal>
            )}
        </div>


    const ggplays =
        <div className="project-card ggPlays">
            {cardOverlay("GGPlays", "https://ggplays.herokuapp.com/")}

            <img className="project-card-img" alt="ggplays-icon" src={ggPlaysIcon}></img>

            {project === 'GGPlays' && (
                <Modal className="project-modal" onClose={() => setProject(false)}>
                    <GGPlays closeModal={closeModal} />
                </Modal>
            )}
        </div>



    return (


        <>
            <div id="portfolio">
                <div className="projects-menu-bar">
                    <div className={"menu-bar menu-bar__react " + (content === 'react' ? "menu-bar-active" : '')} onClick={() => setContent('react')}>React</div>
                    <div className={"menu-bar menu-bar__python " + (content === 'python' ? "menu-bar-active" : '')} onClick={() => setContent('python')}>Python</div>
                    <div className={"menu-bar menu-bar__express " + (content === 'express' ? "menu-bar-active" : '')} onClick={() => setContent('express')}>Express</div>
                    <div className={"menu-bar menu-bar__other " + (content === 'all' ? "menu-bar-active" : '')} onClick={() => setContent('all')}>All</div>
                </div>
                <div className="projects-container">
                    {content === "react" &&
                        <>
                            {programmerr}
                            {robinhood}
                            {luminno}
                        </>
                    }
                    {content === "python" &&
                        <>
                            {programmerr}
                            {robinhood}
                        </>
                    }
                    {content === "express" &&
                        <>
                            {luminno}
                            {ggplays}
                        </>
                    }
                    {content === "all" &&
                        <>
                            {programmerr}
                            {robinhood}
                            {luminno}
                            {ggplays}
                        </>
                    }

                </div>

            </div>
        </>
    )
}

export default Portfolio;
