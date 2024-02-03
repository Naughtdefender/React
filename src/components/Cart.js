import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="m-5 flex align-middle justify-center font-bold text-lg">
        This is Cart Page
      </h1>
      <button onClick={() => handleClearCart()}></button>
      <div className="flex m-2">
        {cartItems.map((item) => (
          <FoodItems {...item?.card?.info} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
