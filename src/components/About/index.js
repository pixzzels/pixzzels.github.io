import React from 'react';
import './About.css';

function About() {
    return (
        <>
            <div id="about-wrapper">
                <div className="about-container">
                    <img className="profile-img" src="https://i.ibb.co/HKRC9m4/IMG-0664.jpg"></img>
                    <div className="about-right">
                        <div className="about-description">
                            I am a highly creative and motivated full-stack software developer. I have passion for learning and trying new things, and with programming, there's never an end to what I can learn whether they are new technologies and languages, or earning mastery of my current skills such as Javascript, React, Redux, Python, and Flask. I love entertaining hobbies that allow me to expand on my creativity like writing and graphic design.
                        </div>
                        <div className="about-find-me">
                            <i className="far fa-envelope" style={{ color: "white" }}></i>
                        </div>
                    </div>
                </div>
                <div className="tech-container">
                    <h1 className="tech-header">
                        Technologies
                    </h1>
                    <div className="technologies">
                        <i className="tech__icon devicon-javascript-plain colored"></i>
                        <i className="tech__icon devicon-react-original-wordmark colored"></i>
                        <i className="tech__icon devicon-redux-plain colored"></i>
                        <i className="tech__icon devicon-python-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-postgresql-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-sequelize-plain-wordmark" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-express-original-wordmark" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-nodejs-plain colored"></i>
                        <i className="tech__icon devicon-html5-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-css3-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-flask-original-wordmark" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-sqlalchemy-plain" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-heroku-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-git-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-docker-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-xd-line colored"></i>

                    </div>
                </div>

            </div>
        </>
    )
}

export default About;