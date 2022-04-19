import RenderWithContext, {
  screen,
  waitFor,
} from "../../../test-utils/testing-context-setup-test";
import { CartModal } from "../cartModal";
import userEvent from "@testing-library/user-event";

test("Rendering modal component", async () => {
  RenderWithContext(<CartModal />);

  const cartButton = screen.getByTestId("cart-button");
  userEvent.click(cartButton);
  const openModal = screen.getByText(/Your Shopping Cart/i);
  expect(openModal).toBeTruthy();

  const getEmptyCartText = screen.getByText(/No items in cart/);
  expect(getEmptyCartText).toBeInTheDocument();

  const closeButton = screen.getByTestId("close-button");
  userEvent.click(closeButton);

  await waitFor(() => {
    const modalText = screen.queryByText(/Your Shopping Cart/i);
    expect(modalText).not.toBeInTheDocument();
  });
});
