import cart from "../assets/img/cart.png";
import { FoodVillaLogo1 } from "../assets/img/logo.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";

const Header = () => {
  const [logIn, toggleLogIn] = useAuth(false);
  const isOnline = useOnline();
  return (
    <>
      <nav className="p-0 m-0 sticky top-0 flex justify-between bg-orange-500 shadow-lg">
        <Link to="/" className="flex justify-center items-center">
          <FoodVillaLogo1 />
        </Link>
        <ul className="flex justify-center items-center">
          <Link
            to="/"
            className="m-0 p-3 text-white hover:text-black hover:border-b-2 hover:border-black hover:py-[14px]"
          >
            <li className="">Home</li>
          </Link>
          <Link
            to="/about"
            className="m-0 p-3 text-white hover:text-black hover:border-b-2 hover:border-black hover:py-[14px]"
          >
            <li>About us</li>
          </Link>
          <Link
            to="/contact"
            className="m-0 p-3 text-white hover:text-black hover:border-b-2 hover:border-black hover:py-[14px]"
          >
            <li>Contact us</li>
          </Link>
          <Link
            to="/instamart"
            className="m-0 p-3 text-white hover:text-black hover:border-b-2 hover:border-black hover:py-[14px]"
          >
            <li>Instamart</li>
          </Link>

          <Link to="/cart" className=" m-2 ">
            <img src={cart} className=" h-5" alt="cart" />
          </Link>
          <span
            className="m-3 text-white hover:text-black"
            style={{ color: isOnline ? "green" : "red" }}
          >
            {isOnline ? "🟢Online" : "🔴Offline"}
          </span>
        </ul>
        <button
          className="bg-green-500 m-3 px-2 py-1 text-white rounded-md hover:bg-green-600"
          onClick={toggleLogIn}
        >
          {logIn ? "LogIn" : "LogOut"}
          {console.log(logIn)}
        </button>
      </nav>
    </>
  );
};
export default Header;
