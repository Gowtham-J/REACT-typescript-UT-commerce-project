import Box from "@mui/material/Box";
// Types
import { CartItemType } from "../../context/context";
// Styles
import QuantityButtons from "../buttons/quantityButtons";

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

const CartItem: React.FC<Props> = ({ item }) => {
  return (
    <Box sx={boxStyles}>
      <img
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          marginRight: "40px",
          border: "2px solid #1976d2",
          borderRadius: "10px",
          marginTop: "40px",
        }}
        src={item.image}
        alt={item.title}
      />
      <div style={{ flex: 1 }}>
        <h3 data-testid="item-title">{item.title}</h3>
        <p>Price: ${item.price}</p>
        <QuantityButtons element={item} />
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
    </Box>
  );
};

export default CartItem;
