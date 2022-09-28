import React from 'react';
import './Center.css'
const Center = (props) => {
    console.log(props.cart)
    const {img,name,id,} =props.cart
    return (
        <div className='sports-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default Center;