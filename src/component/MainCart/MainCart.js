import React from 'react';
import './MainCart.css'
const MainCart = (props) => {
    
     const addHandler =(carts) => {
        console.log(carts)
     }


    const {name,img,age,time,details} = props.cart
    return (
        <div className='sports-item'>
            <img src={img} alt="" />
            <div className='sport-info'>
                <p className='sport-name'>{name}</p>
                <p className='details'>{details}</p>
                <p className='age'>For Age: {age}</p>
                <p className='time'>Time required: {time}</p>
            </div>
            <button onClick={addHandler} className='btn-style'>
                Add to list
            </button>
        </div>
    );
};

export default MainCart;