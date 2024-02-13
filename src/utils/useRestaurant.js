import { useState, useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Shimmer from "../components/Shimmer";
const useRestaurant = (url) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const data = await fetch(url);

    const json = await data.json();
    // console.log(json);

    const restaurantData = json?.data?.cards[0]?.card?.card?.info;
    // console.log(restaurantData);
    setRestaurant(restaurantData);
  }
  return restaurant;
};
export const useRestaurantMenu = (url) => {
  const [restaurantMenu, setResMenu] = useState("");

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const data = await fetch(url);
    const json = await data.json();
    const resMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card?.itemCards;
    // console.log(resMenu);
    const resMenuList = resMenu.map((item) => {
      const price = Math.floor(item?.card?.info?.price / 100) + ".00";
      return (
        <Suspense fallback={<Shimmer />}>
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} : <span>{price}</span>
            <button
              onClick={() => addFoodItem(item)}
              className=" w-6 m-2 text-white border rounded-full bg-green-300"
            >
              +
            </button>
          </li>
        </Suspense>
      );
    });
    setResMenu(resMenuList);
  }
  return restaurantMenu;
};

export default useRestaurant;
