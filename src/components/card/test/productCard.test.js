import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../productCard";
import RenderWithContext from "../../../test-utils/testing-context-setup-test";

test("to find the images from the servers", async () => {
  // @ts-ignore
  RenderWithContext(<ProductCard />);

  const fetchImage = await screen.findAllByRole("img", { name: /iguana$/i });
  expect(fetchImage).toHaveLength(2);

  const checkImageText = fetchImage.map((image) => image.alt);
  expect(checkImageText).toStrictEqual([
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops iguana",
    "Mens Casual Premium Slim Fit T-Shirts  iguana",
  ]);

  const fetchProductButton = await screen.findAllByRole("button", {
    name: /add/i,
  });
  expect(fetchProductButton).toHaveLength(2);

  const fetchAddButton = await screen.findAllByRole("button", { name: "Add" });

  const addButton = fetchAddButton.forEach((btn) => fireEvent.click(btn));
});
