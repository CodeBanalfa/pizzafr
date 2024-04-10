import React, { useState } from "react";
import Pizza from "../../data/DataType";
import { Box, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PizzaCarte from "../pizzaCarte/PizzaCarte";
import "./style.css";

interface Props {
  pizza: Pizza[];
  handlePizzaChange: Function;
}

const PizzaListe = ({ pizza, handlePizzaChange }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <>
      <Typography
        variant="h5"
        className="text"
        style={{
          display: "flex",
          top: "6px",
          left: "70%",
          fontFamily: "cursive",
        }}
      >
        Sélectionnez vos pizzas
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h5"
          color="#000000"
          display="flex"
          marginBottom="50px"
          className="toto"
        >
          Total Price: {totalPrice.toFixed(2)} €
          <IconButton aria-label="add to shopping cart" sx={{ color: "black" }}>
            <AddShoppingCartIcon />
          </IconButton>
        </Typography>
      </Box>
      <Box
        display="flex"
        gap="20px"
        width="100%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        id="list"
        style={{ borderRadius: "100px" }}
      >
        {pizza?.map((pizza) => (
          <PizzaCarte
            key={pizza.id}
            pizza={pizza}
            updateTotalPrice={updateTotalPrice}
            updateQuantity={(quantity: number) =>
              handlePizzaChange(pizza.id, quantity)
            }
          />
        ))}
      </Box>
    </>
  );
};

export default PizzaListe;
