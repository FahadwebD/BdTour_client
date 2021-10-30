import { useState } from "react";
import useAuth from "./useAuth";


const useBook = () =>{
    const [selectedTour, setSelectedTour] = useState([]);
    const {user} = useAuth();


    function addToCart(tour) {
      
        const isHave = selectedTour.find(
            (selected) => selected._id === tour._id
          );
        
          if(isHave){
            isHave.provider = user?.displayName;
            alert("course has been selected!");
            
          }
          else{
          
          fetch("http://localhost:5000/books/add", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(tour),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                 const newSelection = [...selectedTour, tour];
                  setSelectedTour(newSelection);
                
              }
            });
        }
      
      }

      return {addToCart , selectedTour}
}

export default useBook;