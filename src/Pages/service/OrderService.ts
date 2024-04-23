import AuthenticationService from "./AuthenticationService";
import { OrderData } from "../../data/security/orderData"; // Assurez-vous d'importer le bon type

class OrderService {
  static async saveOrder(orderData: OrderData): Promise<any> {
    return fetch("http://localhost:8080/orders/", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
        authorization: AuthenticationService.getJwt(),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save order");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error saving order:", error);
        throw error;
      });
  }
}

export default OrderService;
