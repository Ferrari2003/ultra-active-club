import React from 'react';
import logo from '.././images/png-transparent-sport-logo-football-sports-logos-text-sport-logo.png'
import './Text.css'
const Text = () => {
    return (
        <div className='logo'>
            <div className='imgStyle'>
            <img src={logo} alt="" />
            <h1>SPORTS-ULTRA-CLUB</h1>
            </div>
            <h1 className='text'>Select today’s exercise </h1>
        </div>
    );
};

export default Text;