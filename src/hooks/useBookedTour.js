import { useEffect, useState } from "react";


const useBookedTour = () =>{


    const [booked , setBooked] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooked(data))
    },[])

    return [booked]

}

export default useBookedTour;