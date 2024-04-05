import React, { useEffect, useState } from "react";
import PizzaListe from "../../components/PizzaList/PizzaListe";
import { useParams } from "react-router-dom";
import { mockDataPizza } from "../../data/MockData";
import Pizza from "../../data/DataType";

const PizzaG = () => {
  const params = useParams();
  const [pizzaOrigin, setPizzaOrigin] = useState<Pizza[]>(mockDataPizza);
  const [pizzaL, setPizzaL] = useState<Pizza[]>([]);

  const handlePizzaChange = (piz: Pizza) => {
    let result: Pizza[];

  };
  const [sortBy, setSortBy] = useState<string>("id");
  const [sortDirection, setSortDirection] = useState<number>(1);
  useEffect(() => {
   let tempFiltered: Pizza[];

}, [])

  return (
    <>
      <PizzaListe pizza={mockDataPizza}  />
    </>
  );
};

export default PizzaG;
