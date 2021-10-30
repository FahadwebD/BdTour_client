import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import OrderTotal from './OrderTotal';

const UsersOrders = (props) => {

    const [orders , setOrders] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

   const handleOrderDelete = (id) =>{
     console.log(id)
     const url=`http://localhost:5000/orders/${id}`
     fetch(url, {
       method:'DELETE'
     })
     .then(res => res.json())
     .then(data=>{
       if(data.deletedCount>0){
        
         swal({
             title: "Delted Successfully!",
             text: "You clicked the button!",
             icon: "warning",
             button: "ok",
           });
      
         const booking = orders.filter(book => book._id !== id)
         
        setOrders(booking)
       }
     })
   }



    return (
        <div>
            <h1>From admin</h1>
            <div>
                {
                    orders.map(o=>  <OrderTotal 
                        key={o._id}
                        data={o}
                        handleOrderDelete={handleOrderDelete}></OrderTotal>)
                }
            </div>
        </div>
    );
};

export default UsersOrders;