import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../App";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";

export const ProfileLayout = ({}) => {
  const navigate = useNavigate();
  // const [link, setLink] = useState('')

  const buttonClick = () => {
    navigate("/");
    // setLink('/')
  };

  // if(link) return <Navigate to={link}/>
  // if (true) return <Navigate to="/" />;

  return (
    <div>
      <ul>
        <li>
          <Link to="">Info</Link>
        </li>
        <li>
          <NavLink to="address">Address</NavLink>
        </li>
        <li>
          <NavLink to="order">Orders</NavLink>
        </li>
      </ul>
      <Button>Logout</Button>
      <Button onClick={buttonClick}>Go to Homepage</Button>
      <Outlet />
    </div>
  );
};
