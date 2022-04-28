import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UseContext } from "../../context/context";

export default function Dropdown() {
  const { setProduct } = UseContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: { currentTarget: any }) => {
    setAnchorEl(null);
  };

  const handleSelect = (e: { currentTarget: any }) => {
    // console.log(e.currentTarget.);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        Category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem value="all" onClick={handleSelect}>
          All
        </MenuItem>
        <MenuItem value={"men's"} onClick={handleSelect}>
          Men
        </MenuItem>
        <MenuItem value={"women's"} onClick={handleSelect}>
          Women
        </MenuItem>
        <MenuItem value={"electronics"} onClick={handleSelect}>
          Electronics
        </MenuItem>
        <MenuItem value={"jewelery"} onClick={handleSelect}>
          Jewelry
        </MenuItem>
      </Menu>
    </div>
  );
}
