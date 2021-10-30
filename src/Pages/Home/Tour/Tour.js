import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Tour.css'
import useBook from '../../../hooks/useBook';
import useAuth from '../../../hooks/useAuth';

const Tour = ({tour}) => {
    const history = useHistory();
    const {user} = useAuth();

    const {addToCart , selectedTour} = useBook();
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {place , cost , travel ,Inclusion , img ,duration} = tour;

  
    
    console.log(selectedTour)
    return (
        <div className='container'>
            <div id="c" >	
	
	<div className="product-details">
		
	<h1 id='heich'>{place}</h1>
	
		
			<p className="information">{Inclusion}</p>

		
		
  <div className="controls">
	
	<button className="btnn" onClick={()=> {
                  if (user?.email) {
                    addToCart(tour);
                  } else {
                    history.push("/login");
                  }
                } } >
	 <span id='h' className="price">৳{cost}</span>
   <span id='h' className="shopping-cart">{element}</span>
   <span  className="buy me-3" >Book</span>
 </button>
	
</div>
			
</div>
	
<div className="product-image">
	
	<img src={img} className='img-fluid' alt=""/>
	

<div className="info">
	<h2> Description</h2>
	<ul>
		<li><strong>travel : </strong>{travel}</li>
		<li><strong>Duration : </strong>{duration}</li>
	
		
	</ul>
</div>
</div>

</div>
        </div>
    );
};

export default Tour;