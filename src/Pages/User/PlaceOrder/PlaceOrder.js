import React, { useEffect, useState } from 'react';

import useAuth from '../../../hooks/useAuth';


const PlaceOrder = () => {
   
    const{user} = useAuth()
    const [booked , setBooked] = useState([])
    
  
   console.log(booked)
    useEffect(()=>{

        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooked(data))
    },[])

    const handleAddUser = e =>{
        const name = user?.displayName
        const email = user?.email

        const newUser = {name , email , booked};
        fetch('http://localhost:5000/orders' , {
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
            <h1>Add user</h1>

            <form onSubmit={handleAddUser}>
                <input type="text" defaultValue={user?.displayName} />
                <input type="email" defaultValue={user?.email}/>
                <input type="submit" value="Add" />
            </form>
            
        </div>
    );
};

export default PlaceOrder;