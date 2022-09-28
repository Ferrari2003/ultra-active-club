import React from 'react';
import './TextSport.css'
import logo from '../../images/png-transparent-sport-logo-football-sports-logos-text-sport-logo.png'
const TextSport = () => {
    return (
        <div className='Text'>
            <div className='logo'>
                <img src={logo} alt="" />
            <h1 className='text-style'>SPORTS-ULTRA-CLUB</h1>
            </div>
            <h2>Select today's exercise</h2>
        </div>
    );
};

export default TextSport;