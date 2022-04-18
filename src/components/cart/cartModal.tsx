// @flow
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { CartItemType } from "../../context/context";
import CartItem from "./cartItem";
import { UseContext } from "../../context/context";
import Button from "@mui/material/Button";

type propType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartModal = ({ open, setOpen }: propType) => {
  const { cartItem, handleAddItem, handleRemoveFromCart } = UseContext();
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  const handleClose = (): void => {
    setOpen(false);
  };

  React.useEffect(() => {}, [open]);

  return (
    <Drawer anchor="right" open={open} data-testid="cart-drawer">
      <Box sx={{ margin: 5 }}>
        <div style={{ display: "flex" }}>
          <h2 style={{ flex: 1 }}>Your Shopping Cart</h2>
          <Button data-testid="close-button" size="small" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </div>
        {cartItem.length === 0 ? <p>No items in cart.</p> : null}
        {cartItem.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={handleAddItem}
            removeFromCart={handleRemoveFromCart}
          />
        ))}
        <h2>Total Amount: ${calculateTotal(cartItem).toFixed(2)}</h2>
      </Box>
    </Drawer>
  );
};
