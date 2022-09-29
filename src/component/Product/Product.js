import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    
    const {img,name,details,time,age} = props.product;
    return (
       <div className='game'>
          <img src={img} alt="" />
          <div className='game-info'>
            <p className='game-name'>{name}</p>
            <p className='game-details'>details{details}</p>
            <p className='age'>For Age: {age}</p>
            <p className='time'>Time required: {time}</p>
          </div>
          <button onClick={() =>props.handleClick(props.product)} className='cart-btn'>
           <p> Add to list</p>
           <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
          </button>
       </div>
    );
};

export default Product;