import React from 'react';
import './Tour.css'

const Tour = ({tour}) => {
    console.log(tour)
    const {place , cost , travel ,Inclusion , img ,duration} = tour
    return (
        <div>
            <div id="container">	
	
	<div className="product-details">
		
	<h1>{place}</h1>
	
		
			<p className="information">{Inclusion}</p>

		
		
  <div className="control">
	
	<button className="btn">
	 <span className="price">৳{cost}</span>
   <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
   <span className="buy">Book now</span>
 </button>
	
</div>
			
</div>
	
<div className="product-image">
	
	<img src={img} alt=""/>
	

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