export interface OrderData {
  userId: number; // Identifiant utilisateur
  date: Date; // Date de commande
  totalAmount: number; // Montant total
  orderLines: {
    // Lignes de commande
    pizzaId: number; // Identifiant de la pizza
    quantity: number; // Quantité commandée
  }[];
}

export {};
