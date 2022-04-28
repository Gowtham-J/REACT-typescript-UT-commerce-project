import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { UseContext } from "../../context/context";
import { CartItemType } from "../../context/context";

type prop = {
  element: CartItemType;
};

function QuantityButtons({ element }: prop) {
  const { handleAddItem, handleRemoveFromCart } = UseContext();

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => handleRemoveFromCart(element.id)}
      >
        <RemoveCircleOutlineIcon color="primary" />
      </IconButton>
      <p
        style={{
          alignItems: "center",
          display: "flex",
        }}
        data-testid="amount"
      >
        {element.amount}
      </p>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => handleAddItem(element)}
      >
        <AddCircleOutlineIcon color="primary" />
      </IconButton>
    </Stack>
  );
}

export default QuantityButtons;
