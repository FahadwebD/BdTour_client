import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useFilterOrder = (ordering) => {

    const {user} = useAuth();
    const [fix , setFix] = useState([])


    useEffect(()=>{

        if(ordering.length){
            const email = user?.email
            const u = ordering?.filter(o=> o.email=== email)
        setFix(u)
        }
        

    },[ordering , user])

    return [fix]
};

export default useFilterOrder;