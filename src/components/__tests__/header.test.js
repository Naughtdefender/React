import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cartImg = header.getAllByTestId("cart");
  expect(cartImg[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on rendering Header ", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("✅  Kshitiz Sharma ");
});

test("Cart should have 0 items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart-content");
  expect(cart.innerHTML).toBe(
    '<img src="dummy.png" data-testid="cart" class=" h-6 mx-2" alt="cart"> 0 '
  );
});
