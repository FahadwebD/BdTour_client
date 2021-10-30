import React, { useEffect, useState } from 'react';
import SpecificOne from './SpecificOne';

const ShowOrderP = ({oderss}) => {

   
    const {booked} = oderss
    
    const [specificBooked , setSpecificBooked] = useState([])
      
   console.log(booked)
 
    useEffect(()=>{
        booked?.map(d => setSpecificBooked(d))
        
    },[booked ])
    console.log(specificBooked)


    return (
        <div>
           <h1>{booked?.length}</h1>
           <div>
               {
                booked?.map(d=> <SpecificOne data={d}>

                </SpecificOne>)


               }
               </div>
        </div>
    );
};

export default ShowOrderP;