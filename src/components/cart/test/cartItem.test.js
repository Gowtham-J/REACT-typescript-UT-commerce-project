import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderWithContext from "../../../test-utils/testing-context-setup-test";
import CartItem from "../cartItem";

const itemContent = {
  amount: 1,
  category: "men's clothing",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  rating: { rate: 3.9, count: 120 },
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

const handleAdd = jest.fn();
test("testing the cart item component", async () => {
  RenderWithContext(
    <CartItem
      item={itemContent}
      addToCart={handleAdd}
      removeFromCart={jest.fn()}
    />
  );

  const productTitle = await screen.findByText(
    /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i
  );
  expect(productTitle).toBeInTheDocument();

  const price = screen.getByText("price: $", { exact: false });
  expect(price).toHaveTextContent("109.95");

  const total = screen.getByText("total: $", { exact: false });
  expect(total).toHaveTextContent("109.95");

  const itemAmount = screen.getByTestId("amount");
  expect(itemAmount).toHaveTextContent("1");

  const removeButton = screen.getByRole("button", { name: "-" });
  const addButton = screen.getByRole("button", { name: "+" });

  expect(removeButton).toBeEnabled();
  expect(addButton).toBeEnabled();
});
