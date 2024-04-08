import React, { useState } from "react";
import PizzaListe from "../../components/PizzaList/PizzaListe";
import { mockDataPizza } from "../../data/MockData";
import Pizza from "../../data/DataType";

const PizzaG = () => {
  const [pizzaL] = useState<Pizza[]>(mockDataPizza);

  
  const handlePizzaChange = (piz: Pizza) => {};

  return (
    <>
      <PizzaListe pizza={pizzaL} handlePizzaChange={handlePizzaChange} />
    </>
  );
};

export default PizzaG;
