
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Info from './pages/Profile/info'
import Address from './pages/Profile/address'
import Order from './pages/Profile/order'
import OrderDetail from './pages/Profile/order_detail'

import Login from './pages/Auth/login'
import 'assets/css/style.scss'

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
  useNavigate
} from 'react-router-dom'
import NotFound from './pages/NotFound'
import { MainLayout } from "./layout/MainLayout";
import { ProfileLayout } from "./layout/ProfileLayout";
import { AuthLayout } from "./layout/AuthLayout";
import Checkout from "pages/Checkout";
import { AuthProvider } from "context/AuthContext";
import { PageProvider } from 'context/PageContext'

export default function App() {
  return (
    <BrowserRouter>
      <PageProvider>
        <AuthProvider>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<ProfileLayout />}>
                <Route index element={<Info />} />
                <Route path="address/*" element={<Address />} />
                <Route path="order" element={<Order />} />
                <Route path="order/:id" element={<OrderDetail />} />
              </Route>
            </Route>
            <Route path="/" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </AuthProvider>
      </PageProvider>
    </BrowserRouter>
  );
}
