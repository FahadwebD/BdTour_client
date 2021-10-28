import React from 'react';
import useTours from '../../../hooks/useTours';
import Tour from '../Tour/Tour';
import './TourismPlaces.css'

const TourismPlaces = () => {
    const [ tours] = useTours([]);
   
    return (
        <div >
            <h2>Tour</h2>
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