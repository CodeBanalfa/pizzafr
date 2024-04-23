import React, { useState, useEffect } from "react";
import PizzaListe from "../../components/PizzaList/PizzaListe";
import Pizza from "../../data/DataType";

import PizzaService from "../service/PizzaService";

const PizzaG = () => {
  const [pizzaOrigin, setPizzaOrigin] = useState<Pizza[]>([]);

  // Effet qui se déclenche au chargement du composant
  useEffect(() => {
    // Récupérer la liste complète des pizzas
    PizzaService.getAll().then((value) => setPizzaOrigin(value));
  }, []);

  // Fonction pour mettre à jour une pizza dans la liste
  const handlePizzaChange = (updatedPizza: Pizza) => {
    // Créer une copie de la liste originale
    const updatedPizzas = [...pizzaOrigin];
    // Trouver l'index de la pizza à mettre à jour dans la liste
    const index = updatedPizzas.findIndex(
      (pizza) => pizza.id === updatedPizza.id
    );
    // Remplacer la pizza à l'index trouvé par la version mise à jour
    updatedPizzas[index] = updatedPizza;
    // Mettre à jour l'état avec la liste modifiée
    setPizzaOrigin(updatedPizzas);
  };

  return (
    <>
      <PizzaListe pizza={pizzaOrigin} handlePizzaChange={handlePizzaChange} />
    </>
  );
};

export default PizzaG;
