import { useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import { AuthLayout } from './layout/AuthLayout';
import { MainLayout } from './layout/MainLayout';
import {ProfileLayout} from './layout/ProfileLayout';
import { About, Contact, Home, ViewCard, Checkout, MyProfile, AddressDetail, Order, OrderDetail, Payment, PaymentDetail, Address, Login, ForgotPass, ResetPass, Register} from './pages';
function App() {
  let [login , setLogin] = useState(false);
  let [data , setData] = useState({});
  const handleLogin = (accout) => {
    console.log(accout)
    setLogin(true);
    setData(accout);
  }
  const handleLogout = () => {
    setLogin(false);
  }
  return (
    <BrowserRouter>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/viewcard'>ViewCard</Link></li>
      <li><Link to='/checkout'>Checkout</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      <li><Link to='/auth'>Auth</Link></li>
    </ul>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/viewcard' element={<ViewCard />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/profile' element={<ProfileLayout data={data}  login={login} handleLogout={handleLogout}/>}>
            <Route index element={<MyProfile data={data} />} />
            <Route path='address' element={<Address />} />
            <Route path='address/:id' element={<AddressDetail />} />
            <Route path='order' element={<Order />} />
            <Route path='order/:id' element={<OrderDetail />} />
            <Route path='payment' element={<Payment />} />
            <Route path='payment/:id' element={<PaymentDetail />} />
            
          </Route>

          <Route path='/auth' element={<AuthLayout login={login} />}>
            <Route index element={<Login handleLogin ={handleLogin} />}/>
            <Route path='forgot' element={<ForgotPass />}/>
            <Route path='reset' element={<ResetPass />}/>
            <Route path='register' element={<Register />}/>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
