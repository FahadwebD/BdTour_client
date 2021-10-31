import { useEffect, useState } from "react"


const useTours=()=>{

    const [tours , setTours] = useState([])

    useEffect(()=>{

        fetch('https://glacial-retreat-38096.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])


    return [tours]
}
export default useTours;