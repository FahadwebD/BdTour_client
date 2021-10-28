import { useState } from "react";


const useBook = () =>{
    const [selectedTour, setSelectedTour] = useState([]);


    function addToCart(tour) {
       
        
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

      return {addToCart , selectedTour}
}

export default useBook;