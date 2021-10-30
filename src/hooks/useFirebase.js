import {getAuth , signInWithPopup , GoogleAuthProvider , signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();


const useFirebase = () =>{

    const [user , setUser] = useState({})
    const [isLoading , setIsLoadinng] = useState(true);
    const [error , setError] = useState('')
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoadinng(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth , googleProvider)
        
        .finally(()=> setIsLoadinng(false));
    }


    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth , user=>{
               if(user){
                   setUser(user);
               }
               else{
                   setUser({})
               }
               setIsLoadinng(false)
           });
           return () => unsubscribed;
   
       }, [])

       const logOut = () =>{
        setIsLoadinng(true);
        signOut(auth)
        .then(()=> {
            setUser({})
        })
        .finally(()=> setIsLoadinng(false));
    }


    return {
        user,
        error,
        signInUsingGoogle,
        logOut, 
        setError,
        isLoading
    }
}
export default useFirebase;