import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import UserOrder from './Pages/User/UserOrder/UserOrder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>

        <Home></Home>
        </Route>
        <Route exact path='/myorder'>

        <UserOrder></UserOrder>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <Header/>
    
    <Footer></Footer> */}