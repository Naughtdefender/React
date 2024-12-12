import React from "react";
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
    <div className=" bg-gradient-to-b from-whitebg-gradient-to-r from-red-500 to-orange-500 min-h-screen p-10 flex flex-col items-center">
      <h1 className="m-5 flex items-center justify-center font-bold text-lg">
        This is Cart Page
      </h1>
      <button
        className=" text-white bg-green-500 border rounded-md p-2 "
        onClick={() => handleClearCart()}
      >
        clear
      </button>
      <ul data-testid="cart-items" className=" flex m-10 flex-wrap ">
        {cartItems.map((item) => {
          const data = item?.card?.info;
          return <FoodItems item={data} key={data?.id} />;
        })}
      </ul>
    </div>
  );
};
export default Cart;
