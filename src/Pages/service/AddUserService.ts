import User from "../../data/security/User";
import AuthenticationService from "./AuthenticationService";

class AddUserService {
  static async call(user: User): Promise<Response | undefined> {
    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          authorization: AuthenticationService.getJwt(),
        },
      });

      if (response.ok) {
        return response; // Retourne la réponse HTTP
      } else {
        throw new Error("Échec de la requête HTTP, statut :" + response.status);
      }
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API:", error);
      throw error;
    }
  }

  static async savUser(
    username: number,
    password: string,
    firstName: string,
    lastName: string,
    address: string
  ): Promise<boolean> {
    try {
      // Supposons que vous avez un rôle par défaut pour les nouveaux utilisateurs
      const defaultRole = "ROLE_USER";
      const phoneNumber = 0; // Ne semble pas nécessaire pour la création d'un utilisateur
      const user = new User(
        username,
        firstName,
        lastName,
        phoneNumber,
        defaultRole,
        address
      );
      const response = await this.call(user);

      // Vérifie si la réponse est définie et traite les données
      if (response !== undefined) {
        const responseData = await response.json();
        localStorage.setItem("jwt", responseData.jwt);
        localStorage.setItem("expiration", responseData.expiration);
        localStorage.setItem("refreshToken", responseData.refreshToken);
        localStorage.setItem("user", JSON.stringify(responseData.user));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de l'utilisateur:", error);
      throw error;
    }
  }

  static logout(): void {
    localStorage.removeItem("jwt");
    localStorage.removeItem("expiration");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  }

  static isAuthenticated(): boolean {
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      const expiration = localStorage.getItem("expiration");
      return expiration !== null && Date.parse(expiration) > Date.now();
    } else {
      return false;
    }
  }

  static getJwt(): string | null {
    return localStorage.getItem("jwt");
  }
}
export default AddUserService;
