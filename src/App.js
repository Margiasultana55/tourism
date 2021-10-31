
import './App.css';
import Header from './Components/Header/Header';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import MyOrder from './Components/MyOrder/MyOrder';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import NewService from './Components/NewService/NewService';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Book from './Components/Book/Book';


function App() {
  return (
    <div className="">

      <AuthProvider>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
              <Footer></Footer>
            </Route>

            <Route path='/orders'>
              <MyOrder></MyOrder>

            </Route>
            <Route path='/manage'>
              <ManageAllOrders></ManageAllOrders>

            </Route>
            <Route path='/service'>
              <NewService></NewService>

            </Route>
            <Route path='/signup'>
              <Signup></Signup>

            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <Book></Book>
            </PrivateRoute>


          </Switch>


        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
