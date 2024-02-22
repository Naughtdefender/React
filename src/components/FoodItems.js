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
    <li className="m-2 w-56 bg-white border-2 p-2 border-black  rounded-md flex flex-col items-center">
      <h1 className="m-1 font-semibold text-sm">{name}</h1>
      <div className="flex align-middle justify-center">
        <img
          src={IMG_URL_CDN + imageId}
          alt={name}
          className="m-1 w-40 border rounded-md"
        />
      </div>
      <h4 className="m-1 text-sm">{description}</h4>
      <h4>{price / 100}</h4>
      <button
        className="text-white font-medium text-sm bg-green-500 border rounded-md p-2"
        onClick={() => handleRemoveItem(id)}
      >
        Remove
      </button>
    </li>
  );
};

export default FoodItems;
