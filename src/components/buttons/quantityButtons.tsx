import { Button } from "@mui/material";
import { UseContext } from "../../context/context";
import { CartItemType } from "../../context/context";
const button = {
  minWidth: "40px",
  minHeight: "10px",
  marginLeft: 1,
  marginRight: 1,
};

const ButtonStyle = {
  display: "flex",
  justifyContent: "space-between",
};

type prop = {
  element: CartItemType;
};

function QuantityButtons({ element }: prop) {
  const { handleAddItem, handleRemoveFromCart } = UseContext();

  return (
    <div className="buttons" style={ButtonStyle}>
      <Button
        size="small"
        sx={button}
        disableElevation
        variant="contained"
        onClick={() => handleRemoveFromCart(element.id)}
      >
        -
      </Button>
      <p data-testid="amount">{element.amount}</p>
      <Button
        size="small"
        sx={button}
        disableElevation
        variant="contained"
        onClick={() => handleAddItem(element)}
      >
        +
      </Button>
    </div>
  );
}

export default QuantityButtons;
