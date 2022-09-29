import React from 'react';
import logo from '../images/272680753_1692855514396531_1765510391744026360_n-removebg-preview.png';
import './Cart.css'
 
const breakTime = [10,20,30,40]

const Cart = ({props,time}) => {

   
    return (
        <div>
          <div className='cart'>
            <img src={logo} alt="" />
            <h2>Saiful Islam</h2>
          </div>
           <div className='my-details'>
             <h2>55ks</h2>
             <h2>5.4</h2>
             <h2>19yrs</h2>
           </div>
            <h2 className='texts'>Add A Break</h2>
           
            
            <div className='break-btn'>
                <button  className='timer-btn'>10s</button>
                <button className='timer-btn'>20s</button>
                <button className='timer-btn'>30s</button>
                <button className='timer-btn'>40s</button>
            </div>
            <div className='details-text'>
                <h2>Exercise Details</h2>
            </div>
             
             <h3 className='input-style'>Exercise time: {time}</h3>
             <h3 className='input-styles'>Break time:</h3>
              
             <div>
                    <button className='last-btn'>Activity Completed</button>                     
                        
             </div>         
        </div>
    );
};

export default Cart;