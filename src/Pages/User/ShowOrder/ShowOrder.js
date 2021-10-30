import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useFilterOrder from '../../../hooks/useFilterOrder';
import ShowOrderP from './ShowOrderP';

const ShowOrder = () => {
    const [orders , setOrders] = useState([])
    const {user} = useAuth()
    const [ordering , setOrdering] = useState([])
    const [fix ] = useFilterOrder(ordering) 
    const [finish , setFinish] = useState([])
   
    useEffect(()=>{

        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    useEffect(()=>{
        if(orders.length){
            const email = user?.email
            const stored = [];
            
            const a = orders?.filter(p => p.email === email);
              
            stored.push(a)
            setFinish(stored[0])
            
        }
    },[orders , user])
    useEffect(()=>{
        if(finish.length){
            const email = user?.email
       finish?.map(order => setOrdering(order))
        console.log(ordering)
        
        }

    }, [orders ,user , ordering ,finish])
  
    
   
    console.log(finish)
  
 

  
    
 

    return (
        <div>
            <h2>Show ORder From User</h2>
            <h2>{user.email}</h2>
            <div>
                {
                    <ShowOrderP oderss={ordering}></ShowOrderP>
                }
            </div>
            
            
            
            
        </div>
    );
};

export default ShowOrder;