import React from 'react';

const ManageOrder = ({selected}) => {
    console.log(selected)

    const {place , cost , travel ,Inclusion , img ,duration} = selected
    return (
       <div>
           <div class="card mb-3" style={{maxWidth: "740px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" style={{height:"100%"}} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{place}</h5>
        <p class="card-text">{travel}</p>
        <p class="card-text"><small class="text-muted">{cost}</small></p>
        <button>Remove</button>
        
      </div>
    </div>
  </div>
</div>
       </div>
    )
};

export default ManageOrder;