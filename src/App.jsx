import React, { Suspense } from 'react'
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
import { Provider } from 'react-redux'
import store from './store'
import Product from 'pages/Product'
import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import Button from 'components/Button'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { BreadcrumbsItem } from 'components/Breadcrumbs'
import { PRODUCT_DETAIL_PATH } from 'constant/path'



// import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Info from './pages/Profile/info'
import Address from './pages/Profile/address'
import Order from './pages/Profile/order'
import OrderDetail from './pages/Profile/order_detail'

import Login from './pages/Auth/login'

const Home = React.lazy(() => import('./pages/Home'))

const Header = memo(({ count, callback }) => {
  console.log('Header re-render')
  return (
    <div>Header: {count}</div>
  )
})



// export const Count = () => {
//   const [count1, setCount1] = useState(10)
//   const [count2, setCount2] = useState(0)

//   const fibonaciFn = (number) => {
//     let n1 = 0, n2 = 1, nextTerm;
//     let res = []
//     for (let i = 1; i <= number; i++) {
//       console.log(n1)
//       res.push(n1)
//       nextTerm = n1 + n2;
//       n1 = n2;
//       n2 = nextTerm;
//     }
//     return res
//   }

//   const fibonaci = useMemo(() => {
//     return fibonaciFn(count1)
//   }, [count1])
//   // const fibonaci = fibonaciFn(count1)

//   return (
//     <div>
//       Count: {count1} <br />
//       Fibonaci: {fibonaci.join(', ')}  <br />
//       <Button onClick={() => setCount1(count1 + 1)}>Count1 +</Button> <br />

//       Count2: {count2} <br />
//       <Button onClick={() => setCount2(count2 + 1)}>Count2 +</Button>
//     </div>
//   )
// }

export default function App() {
  const [count, setCount] = useState(0)

  // useLayoutEffect(() => {
  //   console.log(count)
  //   if(count % 2 !== 0){
  //     setCount(Math.round(Math.random() * 100000))
  //   }
  // }, [count])

  useEffect(() => {
    console.log(count)
    if (count % 2 !== 0) {
      setCount(Math.round(Math.random() * 100000))
    }
  }, [count])

  // const [count2, setCount2] = useState(0)
  // const [count1, setCount1] = useState(0)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount1(count1 + 1)
  //   }, 1000)
  // }, [count1])


  // const callback = useCallback(() => {}, [])

  // console.log('App re-render')

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PageProvider>
          <AuthProvider>
            <Suspense fallback={<div>Loading..........</div>}>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/product/*" element={<Product />} />
                  <Route path={PRODUCT_DETAIL_PATH} element={<Product />} />
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
            </Suspense>
          </AuthProvider>
        </PageProvider>
      </Provider>
    </BrowserRouter>
  );
}
