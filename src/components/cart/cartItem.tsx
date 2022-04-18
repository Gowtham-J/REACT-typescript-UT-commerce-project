import { Button } from "@mui/material";
// Types
import { CartItemType } from "../../context/context";
// Styles
// import { Wrapper } from "./CartItem.styles";
import Box from "@mui/material/Box";

import QuantityButtons from "../buttons/quantityButtons";

const ButtonStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const boxStyles = {
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Arial, Helvetica, sans-serif",
  borderBottom: "1px solid lightblue",
  paddingBottom: "20px",
  margin: "50px",
};

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Box sx={boxStyles}>
      <div style={{ flex: 1 }}>
        <h3 data-testid="item-title">{item.title}</h3>
        <div className="information" style={ButtonStyle}>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        {/* <QuantityButtons item={item} /> */}
        <div className="buttons" style={ButtonStyle}>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p data-testid="amount">{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img
        style={{ maxWidth: "80px", objectFit: "cover", marginLeft: "40px" }}
        src={item.image}
        alt={item.title}
      />
    </Box>
  );
};

export default CartItem;
