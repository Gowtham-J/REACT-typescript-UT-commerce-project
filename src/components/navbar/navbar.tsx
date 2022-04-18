import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Cart from "../cart/cart";

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleDrawer = (): void => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button
            color="inherit"
            data-testid="cart-button"
            onClick={handleDrawer}
          >
            <Cart open={open} setOpen={setOpen} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
