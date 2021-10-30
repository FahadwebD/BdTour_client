import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
           <h1>Booked {booked?.length} Packge</h1>
           <div className='container'>
           <Row xs={1} md={2} className="g-4">
               {
                booked?.map(d=> <SpecificOne data={d}>

                </SpecificOne>)


               }
               </Row>
               </div>
        </div>
    );
};

export default ShowOrderP;