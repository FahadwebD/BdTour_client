import React from 'react';

const SpecificOne = ({data}) => {
    console.log(data)
    return (
        <div>
         <h1>{data.place}</h1>
        </div>
    );
};

export default SpecificOne;