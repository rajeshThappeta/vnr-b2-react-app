import React from "react";
import {Link} from 'react-router-dom'

function NavigationBar() {
  return (
    <ul className="nav bg-dark justify-content-end">
      <li className="nav-item">
        <Link className="nav-link " to=" ">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="technologies">
          Technologies
        </Link>
      </li>
    </ul>
  );
}

export default NavigationBar;
