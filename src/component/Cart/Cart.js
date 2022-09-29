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
                <br />
                <div className='my-details'>
                    <h2>55kg</h2>
                    <h2>5.4</h2>
                     <h2>19yrs</h2>
                     </div>   
                     <div className='Add-Break'>
                         <h2>Add A Break</h2>                    
                     </div>   

                     <div className='radius'>
                        <button className='btn-radius'>10s</button>
                        <button className='btn-radius'>20s</button>
                        <button className='btn-radius'>30s</button>
                        <button className='btn-radius'>40s</button>
                     </div>  

                       <div className='details-text'>
                        <h2>EXercise Details</h2>
                     </div>   

                     <div className='input-style'>
                         <h3>Exercise time</h3>
                    </div>                   
                     <div className='input-styles'>
                         <h3>Break time</h3>
                    </div>   
                    <button className='last-btn'>
                        <p>Activity Completed</p>
                        </button>                
            </div>          
             
        </div>
    );
};

export default Cart;