import React, { useEffect, useState } from 'react';


const OrderTotal = (props) => {



    
 
   const{name , booked} = props.data

// Array.prototype.push.apply(data.booked);
// console.log(data.booked)





    return (
        <div>
            <h1>Provider:{name} total booked for {booked.length} booked place{booked.map(c =>
                 <li>{c.place}</li>)}</h1>
            <button onClick={()=>props.handleOrderDelete(props.data._id)} >remove</button>
            
        </div>
    );
};

export default OrderTotal;