import React, { useEffect, useState } from 'react';

import useAuth from '../../../hooks/useAuth';


const PlaceOrder = () => {
   
    const{user} = useAuth()
    const [booked , setBooked] = useState([])
    
  
   console.log(booked)
    useEffect(()=>{

        fetch('https://glacial-retreat-38096.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooked(data))
    },[])

    const handleAddUser = e =>{
        const name = user?.displayName
        const email = user?.email

        const newUser = {name , email , booked};
        fetch('https://glacial-retreat-38096.herokuapp.com/orders' , {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('success')
                e.target.reset();
            }
        })
     
       console.log(newUser)
        e.preventDefault();
    }
    return (
        <div>
            <h1>Confirm Order</h1>

            <form onSubmit={handleAddUser}>
                <input type="text" defaultValue={user?.displayName} />
                <br /> <br />
                <input type="email" defaultValue={user?.email}/>
                <br /> <br />
                <input type="text" defaultValue={`${booked.length} Package Booked` } />
                <br /> <br />
                <input type="submit" value="Confirem Booking" />
            </form>
            
        </div>
    );
};

export default PlaceOrder;