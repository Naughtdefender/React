import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL_CDN } from "../config";
const RestaurantMenu = function () {
  const newID = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setResMenu] = useState("");
  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.0869281&lng=78.2676116&restaurantId=" +
        newID.id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
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
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurantInfo">
      <div className="card">
        <img
          className=""
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
        <ul className="restaurantMenu">{restaurantMenu}</ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
