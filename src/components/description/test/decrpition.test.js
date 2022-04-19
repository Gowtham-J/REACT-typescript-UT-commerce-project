import RenderWithContext, {
  screen,
} from "../../../test-utils/testing-context-setup-test";
import Description from "../description";
import userEvent from "@testing-library/user-event";
const string =
  "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.";
const count = 100;

const slicedString = string.slice(0, count);
test("testing description slicing component", () => {
  RenderWithContext(<Description children={string} count={count} />);

  const readMore = screen.getByText("read more");
  const text1 = screen.getByText("3D NAND flash are applied to", {
    exact: false,
  });
  expect(text1).toHaveTextContent(slicedString);

  userEvent.click(readMore);

  const readLess = screen.getByText("read less");
  expect(readLess).toBeInTheDocument();
  const text = screen.getByText("3D NAND flash are applied to", {
    exact: false,
  });
  expect(text).toHaveTextContent(string);
});
