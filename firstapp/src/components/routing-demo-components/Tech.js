import React from "react";
import { Link, Outlet } from "react-router-dom";

function Tech() {
  return (
    <div>
      <ul className="nav bg-light justify-content-center">
        <li className="nav-item">
          <Link className="nav-link " to="java">
            Java
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="nodejs">
            Nodejs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="vue">
            Vue
          </Link>
        </li>
      </ul>
      {/* place holder for components */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Tech;
