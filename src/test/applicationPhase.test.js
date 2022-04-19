import userEvent from "@testing-library/user-event";
import RenderWithContext, {
  render,
  screen,
} from "../test-utils/testing-context-setup-test";
import App from "../App";

test("Testing the whole application flow", async () => {
  render(<App />);

  const fetchProductButton = await screen.findAllByRole("button", {
    name: /add/i,
  });
  const addButton = fetchProductButton.forEach((btn) => userEvent.click(btn));
  //   userEvent.click(addButton);

  const cartButton = screen.getByTestId("cart-button");
  userEvent.click(cartButton);

  const openModal = screen.getByText(/Your Shopping Cart/);
  expect(openModal).toBeTruthy();

  const getItems = screen.getAllByTestId("item-title");
  expect(getItems).toHaveLength(2);

  const getItemMoney = screen.getAllByText(/price: /i, { exact: false });
  //   console.log(getItems);

  const getTotalMoney = screen.getByText(/Total Amount:/i, { exact: false });
  expect(getTotalMoney).toHaveTextContent("132.25");
  //   const getItemName = getItems.map((title)=> )

  const getAddMoreButton = screen.getAllByRole("button", { name: "+" });
  const clickAddMoreButton = getAddMoreButton.forEach((btn) =>
    userEvent.click(btn)
  );
  expect(getTotalMoney).toHaveTextContent("264.50");

  const getRemoveButton = screen.getAllByRole("button", { name: "-" });
  const clickRemoveButton = getRemoveButton.forEach((btn) =>
    userEvent.dblClick(btn)
  );

  expect(getTotalMoney).toHaveTextContent("0.00");
  expect(screen.getByText(/No items in cart/)).toBeInTheDocument();

  const getCloseKey = screen.getByTestId("close-button");
  userEvent.click(getCloseKey);

  const fetchProductImage = await screen.findAllByRole("img", {
    name: /iguana/i,
  });
  expect(fetchProductImage).toBeTruthy();
});
