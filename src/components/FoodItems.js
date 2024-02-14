import { useDispatch } from "react-redux";
import { IMG_URL_CDN } from "../constants";
import { removeItem } from "../utils/cartSlice";

const FoodItems = ({ item }) => {
  const { description, imageId, name, price, id } = item;
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

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
      <h4>{price / 100}</h4>
      <button onClick={() => handleRemoveItem(id)}>remove</button>
    </div>
  );
};

export default FoodItems;
