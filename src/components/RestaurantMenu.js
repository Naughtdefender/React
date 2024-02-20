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
  return restaurantMenuItem?.length === 0 ? (
    <Shimmer count={count} />
  ) : (
    <div className="min-h-screen ">
      <div className="">
        <img
          className=" h-96"
          src={IMG_URL_CDN + restaurant?.cloudinaryImageId}
          alt="restaurant image"
        />
        <h4>{restaurant?.name}</h4>
        <h4>{restaurant?.area}</h4>
        <h4>{restaurant?.city}</h4>
        <h4>{restaurant?.avgRating} ⭐</h4>
        <h4>{restaurant?.costForTwoMessage}</h4>
      </div>
      <div className="restaurantMenu_container">
        <h1>Menu</h1>
        <ul data-testid="restaurant-menu" className="flex flex-wrap">
          {restaurantMenuItem.map((item, i) => {
            const price = Math.floor(item?.card?.info?.price / 100) + ".00";
            return (
              <li key={i}>
                {item?.card?.info?.name} : <span>{price}</span>
                <button
                  data-testid="add-btn"
                  onClick={() => addFoodItem(item)}
                  className=" w-6 m-2 text-white border rounded-full bg-green-300"
                >
                  +
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
