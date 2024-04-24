import Add from "../../data/security/addDate";

// Définition d'un type pour la réponse du service de création de compte
interface CreateAccountResponse {
  jwt: string; // Jeton JWT généré à l'inscription
  refreshToken: string; // Jeton de rafraîchissement
  user: {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    address: string;
  };
  expiryDate: Date; // Date d'expiration du JWT
}

class CreateAccountService {
  static async save(newAdd: Add): Promise<CreateAccountResponse> {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(newAdd),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error, status: ${response.status}`);
    }

    const result: CreateAccountResponse = await response.json(); // Cast du résultat comme CreateAccountResponse
    return result;
  }
}

export default CreateAccountService;
