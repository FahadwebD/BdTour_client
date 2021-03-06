
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


import AddNewPackage from './Pages/AdminDashboard/AddNewPackage/AddNewPackage';
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery';

import ExtraPage from './Pages/ExtraPage/ExtraPage';
import PageNotFound from './Pages/PageNotfound/PageNotFound';

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
        <PrivateRoute exact path='/admin/userOrder'>
          <UsersOrders></UsersOrders>
        </PrivateRoute>
        <Route exact path='/user/showOrder'>
          <ShowOrder></ShowOrder>
        </Route>
        <PrivateRoute exact path='/addNewTour'>
          <AddNewPackage></AddNewPackage>
        </PrivateRoute>
        <PrivateRoute exact path='/photoGallery'>
          <PhotoGallery></PhotoGallery>
        </PrivateRoute>
        {/* <PrivateRoute>
          <BeAMember exact path='/be/a/member'></BeAMember>
        </PrivateRoute> */}
        <PrivateRoute exact path='/extraPage'>
          <ExtraPage></ExtraPage>
        </PrivateRoute>
        <Route exact path='*'>
          <PageNotFound></PageNotFound>
        </Route>
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