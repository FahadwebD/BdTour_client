import React from 'react';


const ManageOrder = (props) => {

    
   
    



    const {place , cost , travel ,Inclusion , img ,duration} =props.selected
    return (
       <div>
           <div className="card mb-3" style={{maxWidth: "740px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" style={{height:"100%"}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{place}</h5>
        <p className="card-text">{travel}</p>
        <p className="card-text"><small className="text-muted">{cost}</small></p>
        <button onClick={()=>props.handleDeleteUser(props.selected._id)}>Remove</button>
        
      </div>
    </div>
  </div>
</div>
       </div>
    )
};

export default ManageOrder;