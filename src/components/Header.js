import cart from "../assets/img/cart.png";
import { FoodVillaLogo1 } from "../assets/img/logo.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

const Header = () => {
  const [logIn, toggleLogIn] = useAuth(false);
  const isOnline = useOnline();
  const textClass = isOnline ? "text-green-700" : "text-red-600";
  const linkClass = "m-0 p-5 text-white hover:text-red-900 ";
  const { user } = useContext(UserContext);
  return (
    <>
      <nav className="z-10 p-0 m-0 sticky top-0  flex justify-between bg-orange-500 shadow-lg">
        <Link to="/" className="flex justify-center items-center">
          <FoodVillaLogo1 />
        </Link>
        <ul className="flex justify-center items-center">
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

          <Link to="/cart" className=" m-2 ">
            <img src={cart} className=" h-5" alt="cart" />
          </Link>
        </ul>
        <div className="flex items-center">
          <button
            className="bg-green-500 hover:bg-green-600 w-24 m-3 px-2 py-1 text-white rounded-md transform transition-transform duration-300 ease-in-out active:scale-95"
            onClick={toggleLogIn}
          >
            {logIn ? "LogIn" : "LogOut"}
          </button>
          {console.log(logIn)}
          <span className={`m-1 ${textClass}`}>
            {isOnline ? "🟢Online" : "🔴Offline"} {" " + user.name + " "}
          </span>
        </div>
      </nav>
    </>
  );
};
export default Header;
