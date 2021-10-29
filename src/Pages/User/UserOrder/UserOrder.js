import React from 'react';
import useBookedTour from '../../../hooks/useBookedTour';
import ManageOrder from '../ManageOrder/ManageOrder';

const UserOrder = () => {
    const [booked] = useBookedTour();
    console.log(booked)
    return (
        <div>
            <h2>User Order</h2>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                {
                    booked.map(selected => <ManageOrder 
                        key={selected._id}
                    selected={selected} >

                    </ManageOrder>)
                }
            </div>
        </div>
    );
};

export default UserOrder;