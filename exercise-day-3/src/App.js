import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import Layout from './layout';
import About from './page/About';
import ContactUs from './page/ContactUs';
import Profile from './page/Profile';
import FullName from './page/Profile/FullName';
import Phone from './page/Profile/Phone';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Profile/Fullname" element={<FullName />}></Route>
          <Route path="/Profile/Phone" element={<Phone />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
