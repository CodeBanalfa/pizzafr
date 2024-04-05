import React from "react";
import Pizza from "../../data/DataType";
import { Box } from "@mui/material";
import PizzaCarte from "../pizzaCarte/PizzaCarte";

interface Props {
  pizza: Pizza[];
}

const PizzaListe = ({ pizza }: Props) => {
  return (
    <>
      <Box
        display="flex"
        gap="20px"
        width="100%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        id="list"
        style={{ borderRadius: "100%" }}
      >
        {pizza?.map((pizza: Pizza) => (
          <PizzaCarte pizza={pizza} />
        ))}
      </Box>
    </>
  );
};

export default PizzaListe;
