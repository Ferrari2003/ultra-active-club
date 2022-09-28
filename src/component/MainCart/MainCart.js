import React, { useEffect, useState } from 'react';
import Center from './Center/Center';
  
const MainCart = () => {
     const [carts, setCarts] =useState([])

     useEffect(()=>{
      
        fetch('load-data.json')
        .then(Response => Response.json())
        .then(data => setCarts(data))

     },[])
    return (
        <div>
            {
                carts.map(cart => <Center key={cart.id}
                cart={cart}
                ></Center>)
            }
        </div>
    );
};

export default MainCart;