import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import MainLayout from './layout/MainLayout';
import ProfileLayout from './layout/ProfileLayout';

import Address from './pages/Profile/address';
import Info from './pages/Profile/info';
import Order from './pages/Profile/order';
import OrderDetail from './pages/Profile/order_detail';
import { useState } from 'react';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Auth/Login';
function App() {
  let [login , setLogin] = useState(false);
  const submitLogin = () => {
    setLogin(true);
  }
  const submitLogout = () => {
    setLogin(false);
  }
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/order'>Order</Link>
        </li>
      </ul>

      <main>
        <Routes>

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>

            <Route path="/profile" element={<ProfileLayout login={login} logout={submitLogout} />}>
              <Route index element={<Info />}></Route>
              <Route path='address' element={<Address />}></Route>
              <Route path="order" element={<Order />}></Route>
              <Route path="order/:id" element={<OrderDetail />}></Route>
            </Route>
          </Route>

          <Route path='/login' element={<AuthLayout login={login}/>}>
            <Route index element={<Login onClick={submitLogin} />}></Route>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
