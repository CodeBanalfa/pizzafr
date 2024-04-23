import React, { useState } from "react";
import Pizza from "../../data/DataType";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PizzaCarte from "../pizzaCarte/PizzaCarte";
import MopedIcon from "@mui/icons-material/Moped";
import "./style.css";
import { Link } from "react-router-dom";

interface Props {
  pizza: Pizza[];
  handlePizzaChange: Function;
}

const PizzaListe = ({ pizza, handlePizzaChange }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOrder = () => {
    if (totalPrice > 0) {
      handleOpen();
    }
  };

  return (
    <>
      <Typography
        variant="h2"
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
          variant="h2"
          color="#000000"
          display="flex"
          marginBottom="50px"
          className="toto"
        >
          Total Price: {totalPrice.toFixed(2)} €
          <IconButton
            aria-label="add to shopping cart"
            sx={{ color: "black" }}
            onClick={handleOrder}
          >
            <AddShoppingCartIcon style={{ fontSize: "1.5em" }} />
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
        >
          <Box className="pop">
            <h2 id="parent-modal-title">Félicitation!</h2>
            <p id="parent-modal-description">
              Votre commande est en préparation.
            </p>
            <p id="parent-modal-description">
              Elle sera livrée dans 30 minutes.
            </p>
            <MopedIcon style={{ width: "100%", height: "300px" }} />
            <Link
              to="/PizzaG"
              onClick={handleClose}
              style={{ color: "#fbc02c" }}
            >
              Retour à la page de commande
            </Link>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default PizzaListe;
