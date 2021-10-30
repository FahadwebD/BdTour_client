import React from 'react';
import { Button} from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
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
        <div>
            <Button onClick={handleGoogleSignin}>Google</Button>
        </div>
    );
};

export default Login;