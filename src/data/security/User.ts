export default class User {
  username: number;
  firstname: string;
  lastname: string;
  role: string;
  phoneNumber: number;
  address: string;
  constructor(
    username: number,
    firstname: string,
    lastname: string,
    phoneNumber: number,
    role: string,
    address: string
  ) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.role = role;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
