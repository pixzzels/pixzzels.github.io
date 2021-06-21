import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Programmerr from '../Projects/Programmerr';
import ggPlays from './ggPlays.png'

import './Portfolio.css';

function Portfolio() {

    const [content, setContent] = useState('')

    const [open, setOpen] = useState(false);

    // let component;
    // // if (isRegister) {
    // component = <Programmerr />

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
                        {/* <img className="project-card-img" src={ggPlays}></img> */}
                        <button onClick={() => setOpen(true)}>button</button>
                        {open && (
                            <Modal className="login-register-modal" onClose={() => setOpen(false)}>
                                <Programmerr />
                            </Modal>
                        )}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Portfolio;
