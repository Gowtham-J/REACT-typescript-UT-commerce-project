import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { UseContext } from "../../context/context";
import { CartModal } from "./cartModal";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

type propType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Cart({
  open,
  setOpen,
}: // handleClose,
propType) {
  const { cartItem, getTotalItems } = UseContext();

  return (
    <>
      <StyledBadge
        data-testid="badge-icon"
        badgeContent={getTotalItems(cartItem)}
        color="secondary"
      >
        <ShoppingCartIcon />
      </StyledBadge>
      <CartModal open={open} setOpen={setOpen} />
    </>
  );
}
