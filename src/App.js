import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import UserOrder from './Pages/User/UserOrder/UserOrder';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PlaceOrder from './Pages/User/PlaceOrder/PlaceOrder';
import UsersOrders from './Pages/AdminDashboard/UsersOrders/UsersOrders';
import ShowOrder from './Pages/User/ShowOrder/ShowOrder';
import UserManagment from './Pages/User/UserManagement/UserManagment';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import BeAMember from './Pages/BeAMember/BeAMember';

import AddNewPackage from './Pages/AdminDashboard/AddNewPackage/AddNewPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>

        <Home></Home>
        </Route>
        <Route exact path='/home'>

<Home></Home>
</Route>
          <Route exact path='/userManagement'>
            <UserManagment></UserManagment>
          </Route>
        <Route exact path='/myorder'>

        <UserOrder></UserOrder>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/placeOrder'>

          <PlaceOrder></PlaceOrder>

        </Route>
        <Route exact path='/admin/userOrder'>
          <UsersOrders></UsersOrders>
        </Route>
        <Route exact path='/user/showOrder'>
          <ShowOrder></ShowOrder>
        </Route>
        <Route exact path='/addNewTour'>
          <AddNewPackage></AddNewPackage>
        </Route>
        <PrivateRoute>
          <BeAMember exact path='/be'></BeAMember>
        </PrivateRoute>
        
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;


{/* <Header/>
    
    <Footer></Footer> */}