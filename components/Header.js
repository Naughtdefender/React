import cart from "../assets/img/cart.png";
import { useState } from "react";
import FoodVillaLogo from "../assets/img/logo.js";

const loggedInUser = function (log) {
  //API Call to check Authentication
  return log;
};

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <>
      <nav id="navbar">
        <a href="/" className="logo">
          {/* <img src={logo} alt="Logo" /> */}
          <FoodVillaLogo />
        </a>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About us</a>
          </li>
          <li>
            <a href="contact">Contact us</a>
          </li>
          <li>
            <a href="cart" className="cart">
              <img src={cart} alt="cart" />
            </a>
          </li>
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
