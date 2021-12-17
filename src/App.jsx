import { useState } from "react";

import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/profile/Profile";

import Info from "./pages/profile/info";
import Address from "./pages/profile/address";
import Order from "./pages/profile/order";
import OrderDetail from "./pages/profile/order_detail";

import Login from "./pages/auth/login";

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
} from "react-router-dom";
import NotFound from "./pages/notFound";
import { MainLayout } from "./layout/MainLayout";
import { ProfileLayout } from "./layout/ProfileLayout";
import { AuthLayout } from "./layout/AuthLayout";

export default function App() {
  const [login, setLogin] = useState(true);

  const submitLogin = () => {
    setLogin(true);
  };

  const submitLogout = () => {
    setLogin(false);
  };

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">LOgin</Link>
        </li>
        {/* <li>
          <Link to="/profile/address">Address</Link>
        </li> */}
      </ul>
      <Routes>
        {/* <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route> */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/profile"
            element={
              <ProfileLayout login={login} submitLogout={submitLogout} />
            }
          >
            <Route path="/profile/address" element={<Address />}></Route>
            <Route path="/profile/info" element={<Info />}></Route>
            <Route path="/profile/order" element={<Order />}></Route>
            <Route path="/profile/order/:id" element={<OrderDetail />}></Route>
          </Route>

          <Route path="/" element={<AuthLayout login={login} />}>
            <Route
              path="login"
              element={<Login submitLogin={submitLogin} />}
            ></Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {/* <main id="main-content"></main> */}
    </BrowserRouter>
  );
}
