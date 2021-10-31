import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useFilterOrder from '../../../hooks/useFilterOrder';
import ShowOrderP from './ShowOrderP';
import './ShowOrder.css'

const ShowOrder = () => {
    const [orders , setOrders] = useState([])
    const {user} = useAuth()
    const [ordering , setOrdering] = useState([])
    const [fix ] = useFilterOrder(ordering) 
    const [finish , setFinish] = useState([])
   
    useEffect(()=>{

        fetch('https://glacial-retreat-38096.herokuapp.com/orders')
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
  
    
   
   
  
 

  
    
 console.log(user)

    return (
        <div>
       {user.email?      <div className="container mt-5 d-flex justify-content-center">
    <div className="card p-3">
        <div className="d-flex align-items-center">
            <div className="image"> <img src={user.photoURL} alt='' className="rounded" style={{width:"155"}}/> </div>
            <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0">{user.displayName}</h4> <span></span>
               
            </div>
        </div>
    </div>
</div>: <div className='d-flex align-items-center justify-content-center'><button><h1>You Don't Have Any Booked Package Sir</h1></button></div>}
           
            
            
<div>
                {
                    <ShowOrderP oderss={ordering}></ShowOrderP>
                }
            </div>
            
        </div>
    );
};

export default ShowOrder;