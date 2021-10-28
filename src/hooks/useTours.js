import { useEffect, useState } from "react"


const useTours=()=>{

    const [tours , setTours] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])


    return [tours]
}
export default useTours;