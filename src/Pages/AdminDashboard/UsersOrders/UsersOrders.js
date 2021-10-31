import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import OrderTotal from './OrderTotal';

const UsersOrders = (props) => {

    const [orders , setOrders] = useState([])

    useEffect(()=>{

        fetch('https://glacial-retreat-38096.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

   const handleOrderDelete = (id) =>{
     console.log(id)
     const url=`https://glacial-retreat-38096.herokuapp.com/orders/${id}`
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
      <div style={{height:600}}>
        <h1>total Order</h1>
      <div className='d-flex align-items-center justify-content-center'>
      
        <div className='mt-3'  >
            
            <Table  striped bordered hover>
         
          
            <div>
          
                {
                    orders.map(o=>  <OrderTotal 
                        key={o._id}
                        data={o}
                        handleOrderDelete={handleOrderDelete}></OrderTotal>)
                }
              
            </div>
           
            </Table>
        </div>
        </div>
        </div>
    );
};

export default UsersOrders;