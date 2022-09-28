import React, { useEffect, useState } from 'react';
import MainCart from '../MainCart/MainCart';
import './Cart.css'
const Cart = () => {
    const [carts, setCarts] = useState([])

    useEffect(()=>{
        fetch(`load-data.json`)
        .then(Response => Response.json())
        .then(data =>setCarts(data))
    },[])
    return (
        <div className='main-container'>
            <div className="left-container">
                {
                    carts.map(cart => <MainCart key={cart.id}
                     cart={cart}
                    ></MainCart>)
                }
            </div>
            <div className="right-container">
                <h2>Name</h2>
            </div>
        </div>
    );
};

export default Cart;