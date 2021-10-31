import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';


const OrderTotal = (props) => {



    
 
   const{name , booked} = props.data







    return (
        <div >

  <tbody  >
    <tr   >
      
      <td style={{paddingLeft:10 , marginLeft:10}} ><p className='p-3 me-3'>{name}</p></td>
      <td style={{paddingLeft:10 , marginLeft:10}} className='pe-2'><p  className='p-3 me-3'>{booked.map(c => <li style={{listStyle:'none'}}>{c.place}</li>)}</p></td>
      <td style={{paddingLeft:10 , marginLeft:10}} className='pe-2'><p  className='p-3 me-3'><Button onClick={()=>props.handleOrderDelete(props.data._id)} >Delete</Button> <Button>Order Confirmed</Button></p></td>
    
    </tr>
  </tbody>

        </div>
    );
};

export default OrderTotal;