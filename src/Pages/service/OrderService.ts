import AuthenticationService from "./AuthenticationService";
import { OrderData } from "../../data/security/orderData"; // Assurez-vous d'importer le bon type

class OrderService {
  static async saveOrder(neworderData: OrderData): Promise<OrderData> {
    return fetch("http://localhost:8080/orders/", {
      method: "POST",
      body: JSON.stringify(neworderData),
      headers: {
        "Content-Type": "application/json",
        authorization: AuthenticationService.getJwt(),
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error saving order:", error);
        throw error;
      });
  }
}

export default OrderService;
