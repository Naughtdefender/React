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
    <div className="m-10 flex flex-col">
      <h1 className="m-5 flex align-middle justify-center font-bold text-lg">
        This is Cart Page
      </h1>
      <button
        className=" text-white bg-green-500 border rounded-md p-2 m-auto"
        onClick={() => handleClearCart()}
      >
        clear
      </button>
      <ul
        data-testid="cart-items"
        className=" flex m-10 flex-wrap justify-center"
      >
        {cartItems.map((item) => {
          const data = item?.card?.info;
          return <FoodItems item={data} key={data?.id} />;
        })}
      </ul>
    </div>
  );
};
export default Cart;
