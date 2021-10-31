import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import ManageOrder from '../ManageOrder/ManageOrder';

const UserOrder = () => {
    const [booked , setBooked] = useState([])
    console.log(booked)

    useEffect(()=>{

        fetch('https://glacial-retreat-38096.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooked(data))
    },[])
   
    const handleDeleteUser = id =>{
        const url=`https://glacial-retreat-38096.herokuapp.com/books/${id}`
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
         
            const booking = booked.filter(book => book._id !== id)
            
           setBooked(booking)
          }
        })
        
  

        }
    return (
        <div>
            <h2>User Order</h2>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                {
                  booked.map(selected => <ManageOrder 
                        key={selected._id}
                    selected={selected}
                    handleDeleteUser={handleDeleteUser} >

                    </ManageOrder>)
                }
            </div>
            <div > 
                {booked.length?<Link to='/placeOrder'><button >Check Out </button></Link>:'Please Select a package sir'}
             </div>
        </div>
    );
};

export default UserOrder;