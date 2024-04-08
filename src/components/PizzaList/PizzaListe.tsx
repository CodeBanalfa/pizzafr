import React from "react";
import Pizza from "../../data/DataType";
import { Box, Typography } from "@mui/material";
import PizzaCarte from "../pizzaCarte/PizzaCarte";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./style.css";

interface Props {
  pizza: Pizza[];
  handlePizzaChange: Function;
}

const PizzaListe = ({ pizza,handlePizzaChange }: Props) => {
  return (
    <>
    <Typography  variant="h5" className="text">Sélectionnez vos pizza</Typography>
     <Box
          display="flex"
          alignItems="center"
          marginBottom="50px"
          className="toto"
        >
          <AddShoppingCartOutlinedIcon sx={{ fontSize: 50, padding:"5px 7px 9px 10px" }} />
          <Typography variant="h5"sx={{ fontSize: 30, marginLeft: 6 }} >
             Total: €
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
      
        {pizza?.map((pizza: Pizza) => (
          <PizzaCarte pizza={pizza} />
        ))}
      </Box>
    </>
  );
};

export default PizzaListe;
