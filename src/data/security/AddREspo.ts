import Add from "./addDate";

export default class AddResp {
  jwt: string;
  expiration: string;
  user: Add;
  refreshToken: string;

  constructor(
    jwt: string,
    expiration: string,
    user: Add,
    refreshToken: string
  ) {
    if (!jwt || !refreshToken) {
      throw new Error("JWT et Refresh Token ne doivent pas être vides.");
    }

    this.jwt = jwt;
    this.expiration = expiration;
    this.user = user;
    this.refreshToken = refreshToken;
  }

  // Méthode pour vérifier si le token a expiré
  hasExpired(): boolean {
    const expirationDate = new Date(this.expiration);
    return Date.now() > expirationDate.getTime();
  }
}
