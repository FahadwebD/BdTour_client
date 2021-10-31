import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewPackage.css';


const AddNewPackage = () => {

    const { register, handleSubmit ,reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    
    fetch('https://glacial-retreat-38096.herokuapp.com/tours/add' , {
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            alert('success')
            reset();
           
        }
    })
  };
    return (
        <div className='add-tour'>
            <h2>Add New Tour Package</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("place", { required: true, maxLength: 200 })} placeholder="place"/>
      <input type="number" {...register("cost", { required: true, min: 18, max: 92129 })} placeholder="cost" />
      <input {...register("travel", { required: true, maxLength: 200 })} placeholder="travel"/>
      <input {...register("Inclusion", { required: true, maxLength: 200 })} placeholder="Inclusion" />
      <input {...register("img", { required: true, maxLength: 200 })} placeholder="imgUrl" />
      <input type="number" {...register("duration", {required: true, min: 1, max: 99 })} placeholder="duration" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewPackage;
// place
// :
// "Old Dhaka"
// cost
// :
// 10000
// travel
// :
// "Dhaka-Sylhet-Dhaka"
// Inclusion
// :
// "Breakfast+Dinner Pick-up Drop  Accommodation Daily Water"
// img
// :
// "https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Bangl..."
// duration
// :
// 3