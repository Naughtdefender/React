import { useState, useEffect } from "react";

const useRestaurant = (url) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const data = await fetch(url);

    const json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
  }
  return restaurant;
};
export const useRestaurantMenu = (url) => {
  const [restaurantMenu, setResMenu] = useState("");
  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const data = await fetch(url);
    const json = await data.json();
    const resMenuList =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
        (item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}:<span>{item?.card?.info?.price}</span>
          </li>
        )
      );
    setResMenu(resMenuList);
  }
  return restaurantMenu;
};

export default useRestaurant;
