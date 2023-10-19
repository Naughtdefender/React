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
          {/* <img src={logo} alt="Logo" /> */}
          <FoodVillaLogo />
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About us</Link>
          </li>
          <li>
            <Link to="contact">Contact us</Link>
          </li>
          <li>
            <Link to="cart" className="cart">
              <img src={cart} alt="cart" />
            </Link>
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
