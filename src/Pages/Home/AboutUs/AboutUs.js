import React from 'react';

const AboutUs = () => {
    return (
        <div className="container-fluid text-center">
        <h1>Our Services</h1>
 
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-off"></span>
            <img style={{height:70 , width:70}} src="https://icon-library.com/images/62894-package-icon_89512.png" alt="" />
              <h4>Package Tours</h4>
        
          </div>
          <div className="col-sm-4">
            <img style={{height:70 , width:70}} src="https://www.pinclipart.com/picdir/big/78-787654_monitor-lizard-clipart-transparent-background-cruise-ship-clip.png" alt="" />

            <span className="glyphicon glyphicon-heart"></span>
            <h4>River Cruise</h4>
            -
          </div>
          <br />
          <div className="col-sm-4">
            <img style={{height:70 , width:70}} src="https://www.shareicon.net/data/2016/08/31/821532_transportation_512x512.png" alt="" />

            <span className="glyphicon glyphicon-lock"></span>
            <h4>City Sightseeing</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          </div>
          <br />
        <div className="row">
          <div className="col-sm-4">
            <img style={{height:70 , width:70}} src="https://www.nicepng.com/png/full/208-2082453_aphamok-travel-tours-and-travels-icon.png" alt="" />

            <span className="glyphicon glyphicon-leaf"></span>
            <h4>Special Interest Tour</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <br />
          <div className="col-sm-4">
              <img style={{height:70 , width:70}} src="https://5.imimg.com/data5/XA/CA/WS/SELLER-34921560/hotel-icon-png-500x500.png" alt="" />
            <span className="glyphicon glyphicon-certificate"></span>
            <h4>Hotel Reservation</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <img style={{height:70 , width:70}} src="https://icons.iconarchive.com/icons/atyourservice/service-categories/256/Video-icon.png" alt="" />

            <span className="glyphicon glyphicon-wrench"></span>
            <h4>Media Research and Filming</h4>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;