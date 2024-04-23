import { OrderData } from "./orderData";

export default class OrderLine {
  id: number;
  pizzaId: number;
  quantity: number; // Quantité commandée
  order: OrderData; // Référence à l'ordre parent

  constructor(id: number, pizzaId: number, quantity: number, order: OrderData) {
    this.id = id;
    this.pizzaId = pizzaId;
    this.quantity = quantity;
    this.order = order;
  }
}
