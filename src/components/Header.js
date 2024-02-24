import cart from "../assets/img/cart.png";
import LoginPage from "./LoginPage.js";
import FoodVillaLogo1 from "../assets/img/logo.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext.js";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const [islogin, setIsLogin] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isOnline = useOnline();
  const linkClass = "m-1 p-3 text-white hover:text-red-900 ";
  const cartItems = useSelector((store) => store.cart.items);
  const handleNavbar = (e) => {
    e.preventDefault();
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin(!islogin);
    console.log(e.target.value);
  };

  useEffect(() => {
    const data = localStorage.getItem("userData");
    const parsedData = JSON.parse(data);
    setUser({ ...user, ...parsedData });
  }, []);
  return (
    <>
      <nav className="z-10 p-0 m-0 sticky top-0  flex justify-between bg-orange-500 shadow-lg">
        <Link
          to="/"
          data-testid="logo"
          className={
            isNavbarOpen
              ? "flex flex-initial mt-2"
              : "flex justify-center items-center"
          }
        >
          {FoodVillaLogo1}
        </Link>

        <ul
          className={
            isNavbarOpen
              ? "lg:flex lg:flex-row h-auto flex flex-col justify-center items-center transition-transform duration-300 ease-linear"
              : "lg:flex lg:flex-row lg:h-auto sm:h-0 md:hidden justify-center items-center "
          }
        >
          <h1 className={linkClass}>Welcome {user.name}</h1>
          <Link to="/" className={linkClass}>
            <li className="">Home</li>
          </Link>
          <Link to="/about" className={linkClass}>
            <li>About us</li>
          </Link>
          <Link to="/contact" className={linkClass}>
            <li>Contact us</li>
          </Link>
          <Link to="/instamart" className={linkClass}>
            <li>Instamart</li>
          </Link>

          <Link
            to="/cart"
            data-testid="cart-content"
            className="flex flex-row align-middle  text-white m-2"
          >
            <img
              src={cart}
              data-testid="cart"
              className=" h-6 mx-2"
              alt="cart"
            />{" "}
            {cartItems.length}{" "}
          </Link>
        </ul>
        <div
          onClick={handleNavbar}
          className="lg:hidden md:flex sm:flex flex-col h-9 m-1 p-1 border border-white rounded-md"
        >
          <div className=" w-5  pt-1 border border-white rounded-md "></div>
          <div className=" w-5 mt-1 pt-1 border bo0rder-white rounded-md "></div>
          <div className=" w-5 mt-1 pt-1 border border-white rounded-md "></div>
        </div>

        <div className="lg:flex sm:hidden items-center">
          <button
            className=" w-24 flex align-middle justify-center bg-green-500 hover:bg-green-600 p-1 m-2  text-white rounded-md transform transition-transform duration-300 ease-in-out active:scale-95"
            onClick={handleLogin}
          >
            Log {user.name !== "guest" ? " Out" : " In"}
          </button>
          {islogin && <LoginPage login={islogin} setLogin={setIsLogin} />}
          <span data-testid="online-status" className="m-1">
            {isOnline ? "✅" : "❌"}
          </span>
        </div>
      </nav>
    </>
  );
};
export default Header;
