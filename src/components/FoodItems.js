import { IMG_URL_CDN } from "../constants";

const FoodItems = ({ description, imageId, name, price }) => {
  return (
    <div className="m-2 w-56 bg-green-200 border border-green-300 rounded-md">
      <h1 className="m-1">{name}</h1>
      <div className="flex align-middle justify-center">
        <img
          src={IMG_URL_CDN + imageId}
          alt={name}
          className="m-1  h-28 border rounded-md"
        />
      </div>
      <h4 className="m-1 text-sm">{description}</h4>
      <h4>{price}</h4>
    </div>
  );
};

export default FoodItems;
