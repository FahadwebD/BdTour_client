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
            alert("Package Already selected!");
            
          }
          else{
          
          fetch("https://glacial-retreat-38096.herokuapp.com/books/add", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(tour),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                 const newSelection = [...selectedTour, tour];
                 alert("Package  selected!");
                  setSelectedTour(newSelection);
                
              }
            });
        }
      
      }

      return {addToCart , selectedTour}
}

export default useBook;