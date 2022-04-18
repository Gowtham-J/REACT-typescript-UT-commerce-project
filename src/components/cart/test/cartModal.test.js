import { React } from "react";
import { fireEvent, screen } from "@testing-library/react";
import RenderWithContext from "../../../test-utils/testing-context-setup-test";
import { CartModal } from "../cartModal";
import ProductCard from "../../card/productCard";

test("Rendering modal component", async () => {
  RenderWithContext(<CartModal open={true} />);

  const openModal = screen.getByText(/Your Shopping Cart/i);
  expect(openModal).toBeTruthy();

  const getEmptyCartText = screen.getByText(/No items in cart/);
  expect(getEmptyCartText).toBeInTheDocument();

  RenderWithContext(<ProductCard />);

  screen.getByText(/No items in cart/);
});
