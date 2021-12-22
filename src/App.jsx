import { useState } from "react";
import "../src/assets/css/style.scss"

import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'

import Info from './pages/profile/info'
import Address from './pages/profile/address'
import Order from './pages/profile/order'
import OrderDetail from './pages/profile/order_detail'

import Login from './pages/auth/login'

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
import { MainLayout } from "./layout/MainLayout";
import { ProfileLayout } from "./layout/ProfileLayout";
import { AuthLayout } from "./layout/AuthLayout";
import { ValidInput } from "./components/InputValid";
export default function App() {
  const [login, setLogin] = useState(false);

  const submitLogin = () => {
    setLogin(true);
    console.log("login")
  }

  const submitLogout = () => {
    setLogin(false);
    console.log("logout")
  }

  return (

    // <BrowserRouter>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //     <li>
    //       <Link to="/profile">Profile</Link>
    //     </li>

    //     <li>
    //       <Link to="/login">Login</Link>
    //     </li>
    //   </ul>

    //   <main id="main-content">
    //     <Routes>
    //       <Route path="/" element={<MainLayout />}>
    //         <Route index element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/profile" element={<ProfileLayout login={login} submitLogout={submitLogout} />}>
    //           <Route index element={<Info />} />
    //           <Route path="address" element={<Address />} />
    //           <Route path="order" element={<Order />} />
    //           <Route path="order/:id" element={<OrderDetail />} />
    //         </Route>
    //       </Route>

    //       <Route path="/" element={<AuthLayout login={login} />}>
    //         <Route path="login" element={<Login submitLogin={submitLogin} />} />
    //       </Route>

    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
    // <BrowserRouter>
    //   <ul className="">
    //     <li className="">
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li className="">
    //       <Link to="/about">about</Link>
    //     </li>
    //     <li className="">
    //       <Link to="/contact">contact</Link>
    //     </li>
    //     <li>
    //       <Link to="/profile">Profile</Link>
    //     </li>

    //     <li>
    //       <Link to="/login">Login</Link>
    //     </li>
    //   </ul>
    //   <main id="main-content">
    //     <Routes>
    //       <Route path="/" element={<MainLayout />}>
    //         <Route index element={<Home />} />
    //         <Route path="/About" element={<About />} />
    //         <Route path="/Contact" element={<Contact />} />
    //         <Route path="/profile" element={<ProfileLayout login={login} submitLogout={submitLogout} />}>
    //           <Route index element={<Info />} />
    //           <Route path="address" element={<Address />} />
    //           <Route path="order" element={<Order />} />
    //           <Route path="order/:id" element={<OrderDetail />} />
    //         </Route>
    //       </Route>
    //       <Route path="/" element={<AuthLayout login={login} />} >
    //         <Route path="login" element={<Login submitLogin={submitLogin} />} />
    //       </Route>
    //       <Route path="*" element={<NotFound />} />

    //     </Routes>
    //   </main>
    // </BrowserRouter>
    <>

      <ValidInput name="email" type="password" />

    </>
  );
}
