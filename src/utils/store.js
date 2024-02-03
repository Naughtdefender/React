import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { addItem, removeItem, clearCart } from "./cartSlice";
const store = configureStore({
  reducer: { cart: cartSlice },
});
export default store;
