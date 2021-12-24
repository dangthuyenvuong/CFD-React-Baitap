import { useState, createContext } from "react";

import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
import Checkout from "./pages/Checkout";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  // const [login, setLogin] = useState(true);

  // const submitLogin = () => {
  //   setLogin(true);
  // };

  // const submitLogout = () => {
  //   console.log("logout");
  //   setLogin(false);
  // };

  return (
    <BrowserRouter>
      <AuthContext.Provider>
        {/* <ul>
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
          <Link to="/login">Login</Link>
        </li>
      </ul> */}

        <main id="main-content">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route index path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<ProfileLayout />}>
                <Route index element={<Info />} />
                <Route path="address" element={<Address />} />
                <Route path="order" element={<Order />} />
                <Route path="order/:id" element={<OrderDetail />} />
              </Route>
            </Route>

            <Route path="/" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
