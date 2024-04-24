export default class User {
  username: number | string;
  firstname: string;
  lastname: string;
  role: string;
  phoneNumber: string;
  address: string;
  constructor(
    username: string,
    firstname: string,
    lastname: string,
    phoneNumber: string,
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
