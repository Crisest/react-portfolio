import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div className="landing">
        <div className="landing__background">          
            <h1 className="landing__title">Hi, I am Yorguin. I develop Full Stack Web Apps.</h1>

            <div className="landing__bottom">                
                <Link className="landing__link" to={'/bio'}>Learn more about what I do...</Link>
            </div>       
        </div>
    </div>
)

export { LandingPage as default }