import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggyURLRishikesh } from "../constants";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const searchAlgo = function () {
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
    console.log(json);
    const restaurantList =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
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
  return allRestaurants?.length === 0 ? (
    <Shimmer count={count} />
  ) : (
    //If restaurant has data => render actual data
    <>
      <form
        className="text-right mx-36 my-2"
        onSubmit={(e) => {
          e.preventDefault();
          searchAlgo();
        }}
      >
        <input
          type="text"
          className="focus:bg-green-50 placeholder:italic placeholder:text-green-600 bg-gray-50 rounded-md my-2 px-2 py-1"
          value={searchText}
          placeholder="search"
          onChange={(e) => setSearchText(e?.target?.value)}
        />
        <button
          type="button"
          className="bg-green-500 m-2 px-2 py-1 text-white rounded-md hover:bg-green-600"
          onClick={searchAlgo}
        >
          Search
        </button>
      </form>

      <div className="flex flex-wrap justify-center ">
        {filteredRestaurants?.length === 0 ? (
          <h1 style={{ height: "48vh", margin: "auto" }}>
            No Restaurant match your search!!
          </h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
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
