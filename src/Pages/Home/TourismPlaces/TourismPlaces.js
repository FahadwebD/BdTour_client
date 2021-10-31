import React from 'react';
import useTours from '../../../hooks/useTours';
import Tour from '../Tour/Tour';
import './TourismPlaces.css'

const TourismPlaces = () => {
    const [ tours] = useTours([]);
   
    return (
        <div   style={{marginTop:50 , marginBottom:50}}>
           <div style={{marginBottom:10}}>
           <h2 className='mt-3'>Packeges</h2>
          
           </div>
            <div className='boxGrid'>
                {
                    tours.map(tour => <Tour
                    key={tour._id}
                    tour={tour}
                    >
                        
                    </Tour>)
                }
            </div>
        </div>
    );
};

export default TourismPlaces;