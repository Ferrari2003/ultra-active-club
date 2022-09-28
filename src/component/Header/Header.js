import React from 'react';
import './Header.css'
const Header = () => {
    
    return (
        <div className='header'>
            <div className='name'>
              <h2>Welcome Sports</h2>
            </div>
            <div>
            <a href="login">Login</a>
                <a href="manage inventory">Manage Inventory</a>
                <a href="contact">Contact</a>
                <a href="about">About</a>
            </div> 
        </div>
    );
};

export default Header;