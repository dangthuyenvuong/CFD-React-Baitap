import { Profiler, useState } from "react";
import "../src/assets/css/style.scss"

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Info from './pages/profile/Info'
import Address from './pages/profile/Address'
import Order from './pages/profile/Order'
import OrderDetail from './pages/profile/Order-detail'

import Payment from './pages/profile/Payment'
// import Login from './pages/auth/Login'
import AuthContext from "./context"
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom'
import NotFound from './pages/notFound'
import MainLayout from "./layout/MainLayout";
import ProfileLayout from "./layout/ProfileLayout";
import { AuthLayout } from "./layout/AuthLayout";
import { ValidInput } from "./components/InputValid";
import AuthProvider from "./context";
import Login from "./pages/auth/Login";
import MyProfile from "./pages/profile/My-profile";

import PaymentDetail from "./pages/profile/Payment-detail";
import AddressDetail from "./pages/profile/Address-detail";
import Cart from "./pages/profile/Cart";
export default function App() {
  const [login, setLogin] = useState(false);
  function submitLogin() {
    setLogin(true);
  }
  function submitLogout() {
    setLogin(false);
  }


  return (
    <>

      <BrowserRouter>
        <ul className="">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/* <li>
            <Link to="/Login">Cart</Link>
          </li> */}
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
        <main id="main-content">
          <Routes>

            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/profile" element={<ProfileLayout login={login} submitLogout={submitLogout} />} >
                <Route index element={<MyProfile />} />
                <Route path="Order" element={<Order />} />
                <Route path="Order-detail" element={<OrderDetail />} />
                <Route path="Payment" element={<Payment />} />
                <Route path="Payment-detail" element={<PaymentDetail />} />
                <Route path="Address" element={<Address />} />
                <Route path="Address-detail" element={<AddressDetail />} />
                <Route path="Cart" element={<Cart />} />
              </Route >
            </Route>
            <Route path="/" element={<AuthLayout login={login} />}>
              <Route path="Login" element={<Login submitLogin={submitLogin} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>



    </>
  );
}
