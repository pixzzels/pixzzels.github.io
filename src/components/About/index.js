import React from 'react';
import './About.css';
import EllenParkResume from '././Ellen__Park__Resume.pdf';

function About() {
    return (
        <>
            <div id="about-wrapper">
                <div className="about-container">
                    <img className="profile-img" alt="profile-img" src="https://i.ibb.co/HKRC9m4/IMG-0664.jpg"></img>
                    <div className="about-right">
                        <h1>Hey There! Ellen Park here...</h1>
                        <div className="about-description">
                            If I were an animal, I’d be a bird. Why? I love the open space. The freedom to go anywhere. Do anything. I love exploring my creativity, and being able to express it. However, I can get carried away in the world of CSS, and need to be brought back down to earth. This is how I view programming. The front end is an open space where I can soar and expand on my inspirations without limits. The backend is where I am grounded, and gives me a sense of purpose and direction for what I should be aiming to achieve. Programming is where I am able to live in the expansive place of air, but also be grounded into my foundation.
                        </div>
                        <div className="about-find-me">
                            <a href="https://github.com/pixzzels">
                                <i className="contact-icon fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ellen-park-2b32a9172/">
                                <i className="contact-icon fab fa-linkedin"></i>
                            </a>
                            <a href="#contact">
                                <i className="contact-icon far fa-envelope"></i>
                            </a>
                            <a href={EllenParkResume} download style={{display:"flex", alignItems:"center", textDecoration:"none"}}>
                                <i className="contact-icon far fa-file"></i>
                                <div style={{fontSize:"16px", color:"#B0B3B8"}}>
                                    <div>Download</div>
                                    <div>Resume</div>
                                </div>
                            </a>
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
                        <i className="devicon-amazonwebservices-original"></i>
                        <i className="tech__icon devicon-sqlalchemy-plain" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-flask-original-wordmark" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-html5-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-css3-plain-wordmark colored"></i>
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