import { IMG_URL_CDN } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
  sla,
}) => {
  return (
    <div className="card">
      <img src={IMG_URL_CDN + cloudinaryImageId} alt="food gallery" />
      <h4>{name}</h4>
      <h4>{"⭐" + avgRatingString}</h4>
      <p>{cuisines.join(", ")}</p>
      <h4>{sla?.lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
