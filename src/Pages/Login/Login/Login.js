import React from 'react';
import { Button} from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import { Link , useLocation , useHistory} from 'react-router-dom';

const Login = () => {
 
    const { signInUsingGoogle , user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
     console.log(user)
    const handleGoogleSignin = () => {

       
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
          })
      }
    return (
        <div style={{height:"275px"}}>
            <h1>Log In</h1>
           <div style={{marginTop:82}}>
           <Button className='px-5 fadeIn first' style={{backgroundColor:'#58baed' , border:"none"}} onClick={handleGoogleSignin}>Google</Button>
           </div>
        </div>
    );
};

export default Login;