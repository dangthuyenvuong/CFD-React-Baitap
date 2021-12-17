import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      {/* <ul>
        <li>
          <Link to="/address">address</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul> */}
      <div>Footer</div>
    </div>
  );
};
