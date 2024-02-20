import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Header from "../Header";
import { Provider } from "react-redux";
import menu from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
import store from "../../utils/store";
import Cart from "../Cart";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(menu),
  });
});

test("AddItems to cart", async () => {
  const restaurantMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(restaurantMenu.getByTestId("cart-items"));
    expect(restaurantMenu.getAllByTestId("add-btn").length).toBeGreaterThan(1); // Ensure all buttons exist
  });
  const addBtn = restaurantMenu.getAllByTestId("add-btn");
  const cart = restaurantMenu.getByTestId("cart-content");
  const cartItems = restaurantMenu.getByTestId("cart-items");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  fireEvent.click(addBtn[2]);
  expect(cart.innerHTML).toBe(
    '<img src="dummy.png" data-testid="cart" class=" h-6 mx-2" alt="cart"> 3 '
  );
  expect(cartItems).toBe("");
});
