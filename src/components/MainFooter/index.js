import React from 'react';

import './MainFooter.css';

function MainFooter() {
    return (
        <>
            <div className="main-footer">
                <div>
                    Developed & Designed by: Ellen Park
                </div>
                <div className="copyright">
                    <i className="far fa-copyright" style={{marginRight:"5px"}}></i>
                    <p> 2021</p>
                </div>
            </div>
        </>
    )
}

export default MainFooter;