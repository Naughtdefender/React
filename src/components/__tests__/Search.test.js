import { toBeInTheDocument } from "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

const data = RESTAURANT_DATA;
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
});

test("Shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
});

test("Restaurant Should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(9);
});

test("Seach for Jaysika on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const searchInput = body.getByTestId("search-input");
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.change(searchInput, {
    target: {
      value: "jaysika",
    },
  });
  fireEvent.click(searchBtn);
  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(1);
});
