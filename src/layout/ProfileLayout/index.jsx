import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";

export const ProfileLayout = ({ login, submitLogout }) => {
  // const navigate = useNavigate();
  // const [link, setLink] = useState('')

  // const buttonClick = () => {
  // navigate("/");
  // setLink('/')
  // };

  // if (link) return <Navigate to={link} />;
  if (!login) return <Navigate to="/" />;

  return (
    <>
      <div>profile </div>
      <Outlet />
      <ul>
        <li>
          <Link to="/profile/address">Address</Link>
        </li>
        <li>
          <Link to="/profile/info">Info</Link>
        </li>
        <li>
          <Link to="/profile/order">Order</Link>
        </li>
        {/* <li>
          <Link to="/profile/order/:id">OrderDetail</Link>
        </li> */}
      </ul>

      <Button onClick={submitLogout}>Logout</Button>
      {/* <Button onClick={buttonClick}>Go to Homepage</Button> */}
    </>
  );
};
