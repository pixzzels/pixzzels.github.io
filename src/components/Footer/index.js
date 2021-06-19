import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="name-footer">

                <div className="name-container-footer">
                    <span className="oc-tags-footer"> &lt;</span>
                    <NavLink exact to="/" className="name">PARK</NavLink>
                    <span className="oc-tags-footer">/&gt;</span>
                </div>
            </footer>
        </>

    )
}

export default Footer;