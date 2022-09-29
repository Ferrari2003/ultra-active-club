import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Sport.css'
const Sport = () => {

    const [products, setProducts] = useState ([])
    const [time, setTime] = useState([])

    const handleClick = (times) => {
       setTime([...time, times]);
        
    }
 
   useEffect(() =>{
    console.log(time)
   },[time])

  
    useEffect(() =>{
        fetch(`load-data.json`)
        .then(Response => Response.json())
        .then(data => setProducts(data))
    },[])

    
    return (
        <div className='main-container'>
           <div className="sport-container">
               {
                products.map((product) => <Product 
                 key={product.id}
                product ={product}
                handleClick ={handleClick}
                ></Product>)
               }
           </div>
           <div className="item-container">
               <Cart></Cart>
           </div>
        </div>
    );
};

export default Sport;