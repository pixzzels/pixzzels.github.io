import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="name-footer sticky-footer">

                <div className="name-container-footer">
                    <span className="oc-tags-footer-t"> &lt;</span>
                    <span className="oc-tags-footer-slash"> /</span>

                    <NavLink exact to="/" className="name">PARK</NavLink>
                    <span className="oc-tags-footer">&gt;</span>
                </div>
            </footer>
        </>

    )
}

export default Footer;