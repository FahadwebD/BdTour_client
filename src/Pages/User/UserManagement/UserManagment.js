import React from 'react';
import { Link } from 'react-router-dom';
import UserOrder from '../UserOrder/UserOrder';

const UserManagment = () => {
    return (
        <div>
            <Link to='/myorder'> userOrder </Link>
            <Link to='/user/showOrder'>Order Details</Link>
        </div>
    );
};

export default UserManagment;