import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-BfNap0Pe.png";

function Header() {
  return (
    <div className="logo-section">
      <img src={Logo} alt="Logo" className="" />
      <ul>
        <li className="first">
          <Link to="/">
            <i class="fa-solid fa-utensils"></i> Meals
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa-solid fa-utensils"></i> Ingredients
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa-solid fa-utensils"></i> Area
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
