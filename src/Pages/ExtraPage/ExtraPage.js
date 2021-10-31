import React from 'react';
import { Button } from 'react-bootstrap';
import './ExtraPage.css'
const ExtraPage = () => {
    return (
        <div>
            <div>
            <div className='research-box d-flex justify-content-center align-items-center' >
            <h1 className='animate__animated animate__bounceInDown'>The new way to plan your next trip</h1>
            </div>
            <div className='container my-4'>
           <p id='para'> Create a fully customized
day by day itinerary for free</p>


            </div>

            <div>
            <div className="header">
    
    
    <h1 className='animate__animated animate__fadeInLeft' id='head'>Get a personalized trip</h1>
    
  </div>
  <div className="row1-container">
    <div className="boxs box-down green ">
      
      <p>A complete day by day itinerary
based on your preferences</p>
      <img id='img-k'  className='img-fluid' src="https://icon-library.com/images/location-pin-icon/location-pin-icon-1.jpg" alt=""/>
    </div>

    <div className="boxs red">
    
      <p>Refine your trip. We'll find the
best routes and schedules</p>
      <img id='img-k' className='img-fluid' src="https://image.flaticon.com/icons/png/512/244/244009.png" alt=""/>
    </div>

    <div className="boxs box-down blue">
      <p>Choose from the best hotels
and activities. Up to 50% off</p>
      <img id='img-k' className='img-fluid' src="https://icon-library.com/images/airplane-icon-png/airplane-icon-png-10.jpg" alt=""/>
    </div>
  </div>
  <div className="row2-container">
    <div className="boxs orange">
      <p>Everything in one place.
Everyone on the same page.</p>
      <img id='img-k' className='img-fluid' src="https://coloredbrain.com/wp-content/uploads/2019/07/icon-manage-score.png" alt=""/>
    </div>
  </div>
            </div>
            
            
        </div>
        </div>
    );
};

export default ExtraPage;