import cart from "../assets/img/cart.png";
import { useState } from "react";
import FoodVillaLogo from "../assets/img/logo.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";

const Header = () => {
  const [logIn, toggleLogIn] = useAuth(false);
  const isOnline = useOnline();
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
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>

          <Link to="/cart" className="cart">
            <li>
              <img src={cart} alt="cart" />
            </li>
          </Link>
          <span
            className="online_status"
            style={{ color: isOnline ? "green" : "red" }}
          >
            {isOnline ? "🟢nline" : "🔴ffline"}
          </span>
          <button onClick={toggleLogIn} className="btn-log">
            Log{logIn ? "In" : "Out"}
            {console.log(logIn)}
          </button>
        </ul>
      </nav>
    </>
  );
};
export default Header;
