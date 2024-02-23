import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useRef, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggyURLRishikesh } from "../constants";
import { filterData } from "../utils/helper";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  const searchAlgo = (e) => {
    e.preventDefault();
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  useEffect(() => {
    //API CALL
    getRestaurants(swiggyURLRishikesh);
  }, []);
  async function getRestaurants(url) {
    const data = await fetch(url);
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }

  //Conditional Rendering
  //if Restaurants are not there => dont render anything (Early Return)

  //checking Internet connection
  // const online = useOnline();
  // if (!online) {
  //   return <h2>🔴 Check internet connection</h2>;
  // }

  const count = 10;
  if (!allRestaurants) return null;
  //If restaurant is empty => render Shimmer UI
  return allRestaurants?.length < 1 ? (
    <Shimmer count={count} />
  ) : (
    //If restaurant has data => render actual data
    <>
      <div className="p-7 m-auto bg-red-500 ">
        <form className="flex flex-col text-right m-auto" onSubmit={searchAlgo}>
          <input
            data-testid="search-input"
            type="text"
            className=" w-52 focus:bg-green-50 placeholder:italic placeholder:text-green-600 bg-gray-50 rounded-md m-auto px-2 py-1"
            value={searchText}
            placeholder="search"
            onChange={(e) => setSearchText(e?.target?.value)}
          />
          <button
            data-testid="search-btn"
            type="submit"
            className=" w-36 bg-green-500 transition hover:bg-green-600 my-5 m-auto px-2 py-1 text-white rounded-md   active:scale-95"
          >
            Search
          </button>
          <input
            className="w-auto my-5 m-auto border rounded-md"
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e?.target?.value,
              });
            }}
          />
          <input
            className="w-56 my-5 m-auto border rounded-md"
            value={user.email}
            onChange={(e) => {
              setUser({
                ...user,
                email: e?.target?.value,
              });
            }}
          />
        </form>
      </div>
      <h1 className="m-auto text-center text-3xl font-semibold text-white  bg-red-500 border-b-2 border-white">
        Restaurants List
      </h1>
      <div
        className=" px-44  bg-gradient-to-b from-whitebg-gradient-to-r from-red-500 to-orange-500 flex flex-wrap  min-h-screen"
        data-testid="restaurant-list"
      >
        {filteredRestaurants?.length === 0 ? (
          <h1 style={{ height: "48vh", margin: "auto" }}>
            No Restaurant match your search!!
          </h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                className="flex items-center justify-center p-5"
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {" "}
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
