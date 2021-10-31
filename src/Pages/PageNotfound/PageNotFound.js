import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div className='container p-5'>
            <div className='d-flex justify-content-center align-items-center'>
                <div><img style={{height:500 , width:600}} src="https://www.humepartners.com.au/wp-content/uploads/2019/02/404-page-04.png" alt="" /></div>
                
            </div>
            <div ><Link to='/'><Button style={{backgroundColor:'#a8cce2' , border:'none'}}>Go Back</Button></Link></div>
        </div>
    );
};

export default PageNotFound;