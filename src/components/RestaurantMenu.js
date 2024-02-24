import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL_CDN } from "../constants";
import { Suspense, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = function () {
  const [restaurantMenuItem, setRestaurantMenuItem] = useState([{}]);
  const [restaurant, setRestaurant] = useState([{}]);
  const { id } = useParams();
  const url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.1056329&lng=78.2953055&restaurantId=" +
    id +
    "&catalog_qa=undefined&submitAction=ENTER";

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  useEffect(() => {
    getRestaurantinfo();
  }, []);
  const getRestaurantinfo = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const resMenu =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const resData = json?.data?.cards[2]?.card?.card?.info;
    setRestaurant(resData);
    setRestaurantMenuItem(resMenu);
  };
  const count = 10;
  return (
    <Suspense fallback={<Shimmer count={count} />}>
      <div className=" bg-gradient-to-b from-whitebg-gradient-to-r from-red-500 to-orange-500 min-h-screen p-10 ">
        <div className="relative mx-10">
          <h4 className="m-2 p-6 text-4xl font-bold">{restaurant?.name}</h4>
          <div className="mx-4 px-4 flex flex-col">
            <h4 className="py-2 text-lg font-bold text-white">
              {restaurant?.name}
            </h4>
            {/* <h4 className="text-lg font-bold">{restaurant?.area}</h4> */}
            <h4 className="py-2 text-sm text-white">{restaurant?.city}</h4>
            <h4 className=" border text-center rounded-md p-3 text-sm text-white  absolute bottom-8 right-10">
              ⭐ {restaurant?.avgRating}
              <div className="m-1 border"></div>
              <h4 className="p-1">5K+ ratings</h4>
            </h4>
            <h4 className="py-2 text-sm text-white ">
              {restaurant?.costForTwoMessage}
            </h4>
          </div>
        </div>
        <div className="m-2 p-8 ">
          <h1 className="m-auto text-center text-2xl font-bold ">Menu</h1>
          <ul
            data-testid="restaurant-menu"
            className="flex flex-col py-12 lg:px-96 md:px-44 sm:px-28"
          >
            {restaurantMenuItem.map((item) => {
              const price = Math.floor(item?.card?.info?.price / 100) + ".00";
              return (
                <li className="flex justify-between" key={item?.card?.info?.id}>
                  <p className=" font-medium text-white">
                    {item?.card?.info?.name}
                    <span className="font-thin block ">₹{price}</span>
                  </p>
                  <div className="relative flex flex-col items-center p-2">
                    <img
                      className="lg:w-28 md:w-16 md:-16 sm:w-16 lg:h-28 sm:h-16 border-black rounded-md"
                      src={`${IMG_URL_CDN}${item?.card?.info?.imageId}`}
                      alt={item?.card?.info?.name}
                    />
                    <button
                      className="absolute  bottom-1  w-12 mb-2 text-white border-black rounded-md bg-green-500 active:scale-95 "
                      data-testid="add-btn"
                      onClick={() => addFoodItem(item)}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Suspense>
  );
};
export default RestaurantMenu;
