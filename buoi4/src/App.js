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
import {Provider} from 'react-redux'
import store from './store'

import './assets/global.scss'

import { About, Contact, Home, ViewCard, Checkout, Profile, AddressDetail, Order, OrderDetail, Payment, PaymentDetail, Address, Login, ForgotPass, ResetPass, Register} from './pages';
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/viewcard' element={<ViewCard />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/profile' element={<ProfileLayout />}>
            <Route index element={<Profile/>} />
            <Route path='address' element={<Address />} />
            <Route path='address/:id' element={<AddressDetail />} />
            <Route path='order' element={<Order />} />
            <Route path='order/:id' element={<OrderDetail />} />
            <Route path='payment' element={<Payment />} />
            <Route path='payment/:id' element={<PaymentDetail />} />
            
          </Route>

          <Route path='/auth' element={<AuthLayout />}>
            <Route index element={<Login />}/>
            <Route path='forgot' element={<ForgotPass />}/>
            <Route path='reset' element={<ResetPass />}/>
            <Route path='register' element={<Register />}/>

          </Route>
        </Route>
      </Routes>
      </Provider>
    </BrowserRouter>
    );
}

export default App;
