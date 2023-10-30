import { IMG_URL_CDN } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
  sla,
}) => {
  return (
    <div className="m-5 p-2 w-56 shadow-lg">
      <img
        src={IMG_URL_CDN + cloudinaryImageId}
        className="w-52 h-52 "
        alt="food gallery"
      />
      <h4 className="font-bold p-1 m-1 text-xl">{name}</h4>
      <h4 className="p-1 m-1">{"⭐" + avgRatingString}</h4>
      <p className="p-1 m-1">{cuisines.join(", ")}</p>
      <h4 className="p-1 m-1">{sla?.lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
