import React from 'react';
import './MainCart.css'
const MainCart = (props) => {
    const {name,img,age,time,details} = props.cart
    return (
        <div className='sports-item'>
            <img src={img} alt="" />
            <div className='sport-info'>
                <p className='sport-name'>{name}</p>
                <p>{details}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}</p>
            </div>
            <button className='btn-style'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default MainCart;