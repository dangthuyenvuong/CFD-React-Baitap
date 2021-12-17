import React from "react";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";

export const AuthLayout = ({ login }) => {
  if (login) return <Navigate to="/profile" />;
  return (
    <div>
      <ul>
        <li>
          <Link to="login">Login</Link>{" "}
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
        <li>
          <Link to="forgot-password">Forgot password</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
