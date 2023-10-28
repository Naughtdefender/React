import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL_CDN } from "../config";
import useRestaurant, { useRestaurantMenu } from "../utils/useRestaurant";

const RestaurantMenu = function () {
  const { id } = useParams();
  const url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.0869281&lng=78.2676116&restaurantId=" +
    id +
    "&catalog_qa=undefined&submitAction=ENTER";
  const restaurant = useRestaurant(url);
  const restaurantMenu = useRestaurantMenu(url);

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
