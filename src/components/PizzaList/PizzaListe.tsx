import React, { useState } from "react";
import Pizza from "../../data/DataType";
import { Box, Typography } from "@mui/material";
import PizzaCarte from "../pizzaCarte/PizzaCarte";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./style.css";

interface Props {
  pizza: Pizza[];
  handlePizzaChange: Function;
}

const PizzaListe = ({ pizza, handlePizzaChange }: Props) => {
  const [total, setTotal] = useState<number>(0);

  const calculateTotal = () => {
    let newTotal = 0;
    pizza.forEach((pizza) => {
      newTotal += pizza.price * (pizza.quantity ?? 0); // Utilisation de ?? pour gérer le cas où la quantité est undefined
    });
    setTotal(newTotal);
  };
  

  const handleQuantityChange = (id: number, quantity: number) => {
    // Mettez à jour la quantité de la pizza avec l'ID spécifié
    const updatedPizza = pizza.map((p) =>
      p.id === id ? { ...p, quantity: quantity } : p
    );
    handlePizzaChange(updatedPizza);
    calculateTotal();
  };

  return (
    <>
      <Typography variant="h5" className="text">
        Sélectionnez vos pizzas
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        marginBottom="50px"
        className="toto"
      >
        <AddShoppingCartOutlinedIcon
          sx={{ fontSize: 50, padding: "5px 7px 9px 10px" }}
        />
        <Typography variant="h5" sx={{ fontSize: 30, marginLeft: 6 }}>
          Total: {total.toFixed(2)} €
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
            key={pizza.id} // Utilisez l'ID comme clé
            pizza={pizza}
            handleQuantityChange={(quantity: number) =>
              handleQuantityChange(pizza.id, quantity)
            }
          />
        ))}
      </Box>
    </>
  );
};

export default PizzaListe;
