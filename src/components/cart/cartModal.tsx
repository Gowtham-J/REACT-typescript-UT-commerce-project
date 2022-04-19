// @flow
import * as React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./cartItem";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

// Components
import { UseContext } from "../../context/context";
import { CartItemType } from "../../context/context";

type Anchor = "right";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const CartModal = () => {
  const { cartItem, handleAddItem, handleRemoveFromCart, getTotalItems } =
    UseContext();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  const anchor = "right";

  React.useEffect(() => {}, [state]);

  return (
    <React.Fragment key={anchor}>
      <Button
        data-testid="cart-button"
        color="inherit"
        onClick={toggleDrawer(anchor, true)}
      >
        <StyledBadge
          data-testid="badge-icon"
          badgeContent={getTotalItems(cartItem)}
          color="secondary"
        >
          <ShoppingCartIcon />
        </StyledBadge>
      </Button>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        <Box sx={{ margin: 5 }}>
          <div style={{ display: "flex" }}>
            <h2 style={{ flex: 1 }}>Your Shopping Cart</h2>
            <Button
              data-testid="close-button"
              size="small"
              onClick={toggleDrawer(anchor, false)}
            >
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
      </SwipeableDrawer>
    </React.Fragment>
  );
};
