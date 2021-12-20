import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from 'react-router-dom'
import NotFound from './pages/notFound'
import Home from './pages/home';
import About from './pages/about';
import ContactUs from './pages/contactUs';
import ViewCart from './pages/viewcart'
import Checkout from './pages/checkout';
import CheckoutSuccess from './pages/checkoutscucess';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import ResetPassword from './pages/reset password';
import Profile from './pages/profiles';
import MyProfile from './pages/profiles/_myprofile';
import Order from './pages/profiles/order';
import OrderDetail from './pages/profiles/oderdetail';
import MainLayout from './layout/mainlayout';
import Payment from './pages/profiles/payment';
import PaymentDetail from './pages/profiles/paymentdetail';
import Address from './pages/profiles/address';
import AddressDetail from './pages/profiles/addressdetail';
import AccorItem from './components/accorItem';
import Tab from './components/tab';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      <AccorItem />
      <AccorItem />
      <AccorItem />
      <AccorItem />
      /---------------------/

      <Tab />

      /---------------------/

      <Input placeholder={'Nhap vao day'} size='large' label='Label Name' />
      {/* <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>=
          <Route path='ContactUs' element={<ContactUs />}/>=
          <Route path='ViewCart' element={<ViewCart/>}/>=
          <Route path='checkout' element={<Checkout/>}/>=
          <Route path='chkscss' element={<CheckoutSuccess/>}/>=
          <Route path='login' element={<Login />}/>=
          <Route path='reg' element={<Register />}/>=
          <Route path='forgot' element={<ForgotPassword />}/>=
          <Route path='reset' element={<ResetPassword />}/>=
          <Route path='pf' element={<Profile />}>
              <Route path='myprofile' element={<MyProfile />}/>=
              <Route path='order' element={<Order />}/>=
              <Route path='order_detail' element={<OrderDetail />}/>=
              <Route path='payment' element={<Payment />}/>=
              <Route path='payment_detail' element={<PaymentDetail />}/>=
              <Route path='address' element={<Address />}/>=
              <Route path='address_detail' element={<AddressDetail />}/>=
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
