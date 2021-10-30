import { useEffect, useState } from "react";


const useBookedTour = () =>{


    const [booked , setBooked] = useState([])
    const [trying , setTrying] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooked(data))
    },[])




    const deleteUser = id =>{
        const url=`http://localhost:5000/books/${id}`
      fetch(url, {
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data=>{
        if(data.deletedCount>0){
          alert('deleted Success');
       
          const booking = booked.filter(book => book._id !== id)
          
         setTrying(booking)
        }
      })
      
      }

    return [booked ,setBooked ,deleteUser , trying] 

}

export default useBookedTour;