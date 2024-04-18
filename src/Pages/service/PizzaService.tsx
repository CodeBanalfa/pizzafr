import Pizza from "../../data/DataType";
import AuthenticationService from "./AuthenticationService";

class PizzaService {
  static async getAll(): Promise<Pizza[]> {
    return fetch("http://localhost:8080/pizza/", {
      headers: {
        authorization: AuthenticationService.getJwt(),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur HTTP, statut :" + response.status);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des pizzas :", error);
        throw error;
      });
  }
}
export default PizzaService;
