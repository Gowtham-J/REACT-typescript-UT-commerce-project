import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { UseContext } from "../../context/context";
import { CartItemType } from "../../context/context";
import QuantityButtons from "../buttons/quantityButtons";
import { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Description from "../description/description";

export default function ProductCard() {
  const { product, handleAddItem, cartItem } = UseContext();

  const addButton = (item: any) => {
    return (
      <Button
        data-testid="button-add"
        size="small"
        onClick={(e) => handleAddItem(item)}
      >
        {" "}
        Add <AddShoppingCartIcon />
      </Button>
    );
  };

  const existingCartItem = (item: { id: number }) => {
    if (cartItem) {
      for (let index = 0; index < cartItem.length; index++) {
        let element = cartItem[index];
        if (element.id === item.id) {
          return <QuantityButtons element={element} />;
        }
      }
    }
    return addButton(item);
  };

  useEffect(() => {}, [cartItem.length, handleAddItem]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {product.map((item: CartItemType) => {
            return (
              <Grid key={item.id} item xs={4}>
                <Card
                  sx={{
                    maxWidth: 345,
                    margin: 2,
                    minHeight: 400,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={`${item.title} iguana`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <Description children={item.title} count={60} />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Description children={item.description} count={100} />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{item.price}</Button>
                    {existingCartItem(item)}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
