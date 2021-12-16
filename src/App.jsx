import { useState } from "react";
import {
  BrowserRouter, Link, Route, Routes
} from "react-router-dom";
import AuthenLayout from "./Layout/AuthenLayout";
import MainLayout from "./Layout/MainLayout";
import ProfileLayOut from "./Layout/ProfileLayOut";
import About from './pages/About';
import Address from "./pages/Address";
import AddressDetail from "./pages/Address/AddressDetail";
import Login from "./pages/Authen/Login";
import CheckOut from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MyProfile from "./pages/Authen/MyProfile";
import NotFoud from './pages/NotFound';
import Order from "./pages/Order";
import OrderDetail from "./pages/Order/OrderDeTails";
import PayMent from "./pages/Payment";
import PaymentDetails from "./pages/Payment/PaymentDetail";
import ViewCart from './pages/ViewCart';
import Forgot from "./pages/Authen/Forgot";
import Register from "./pages/Authen/Register";
import Reset from "./pages/Authen/Reset";

function App() {
  const [login, setLogin] = useState(false)
  
  const handleLogin = () => {
    setLogin(true);
  }
  const handleLogout = () => {
    setLogin(false);
  }
  console.log(login);
  return (
    <BrowserRouter>

    <ul>
        <li>
          <Link to = '/' >Home</Link>
        </li>
        <li>
          <Link to = '/about' >About</Link>
        </li>
        <li>
          <Link to = '/contact' >Contact</Link>
        </li> 
        <li>
          <Link to = '/viewcart' >View Cart</Link>
        </li> 
        <li>
          <Link to = '/checkout' >Checkout</Link>
        </li> 
        <li>
          <Link to = '/profile' >Profile</Link>
        </li> 
        <li>
          <Link to = '/authen'>Authen</Link>
        </li>
      </ul>
    <main id="main-content">
      <Routes>
        <Route path='/' element={<MainLayout />}> 
          <Route index  element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/viewcart' element={<ViewCart />} ></Route>
          <Route path='/checkout' element={<CheckOut />} />
            
            <Route path="/profile" element={<ProfileLayOut login={login} handleLogout={handleLogout}/> }  >
              <Route index element={<MyProfile />} />
              <Route path="address" element={<Address />}/>
              <Route path="address/:id" element={<AddressDetail />}/>
              <Route path="payment" element={ <PayMent />}/>
              <Route path="payment/:method" element={ <PaymentDetails />}/>
              <Route path="order" element={<Order />} />
              <Route path="order/:id" element={ <OrderDetail />}/>
          </Route> 

              
            <Route path='/authen' element = {<AuthenLayout/>}>
              <Route path='login' element={<Login handleLogin={handleLogin} />} />
              <Route path='reset' element={<Reset login = {login}  />} />
              <Route path='forgot' element={<Forgot login = {login} />}  />
              <Route path='register' element={<Register login = {login} /> } />
              </Route>
            
          </Route>

            
            
          <Route path='*' element={<NotFoud />}></Route>
        
         
      </Routes>
    </main>
    </BrowserRouter>
    
   
  );
}

export default App;
