import cart from "../assets/img/cart.png";
import { useState } from "react";
import FoodVillaLogo from "../assets/img/logo.js";
import { Link } from "react-router-dom";

const loggedInUser = function (log) {
  //API Call to check Authentication
  return log;
};

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  return (
    <>
      <nav id="navbar">
        <Link to="/" className="logo">
          <FoodVillaLogo />
        </Link>
        <ul className="nav-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About us</li>
          </Link>
          <Link to="contact">
            <li>Contact us</li>
          </Link>

          <Link to="cart" className="cart">
            <li>
              <img src={cart} alt="cart" />
            </li>
          </Link>
          <button
            onClick={() => setisLoggedIn(isLoggedIn === true ? false : true)}
            className="btn-log"
          >
            Log{loggedInUser(isLoggedIn) ? "In" : "Out"}
          </button>
        </ul>
      </nav>
    </>
  );
};
export default Header;
