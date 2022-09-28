import React from 'react';
import './Header.css'
const Header = () => {
    
    return (
        <div className='header'>
            <div className='name'>
              <h2>Welcome Sports</h2>
            </div>
            <div>
            <a href="sports">Sports</a>
                <a href="orders">Orders</a>
                <a href="contact">Contact</a>
                <a href="about">About</a>
            </div>
        </div>
    );
};

export default Header;