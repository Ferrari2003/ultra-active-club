import React, { useEffect, useState } from 'react';
import MainCart from '../MainCart/MainCart';
import logo from '../../images/272680753_1692855514396531_1765510391744026360_n-removebg-preview.png'
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
                <div className='left-side'>
                <img src={logo} alt="" />
                <h2>Saiful Islam</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;