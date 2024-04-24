export default class Add {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: Array<string>;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    phoneNumber: string,
    address: string,
    role: Array<string>
  ) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;

    this.phoneNumber = phoneNumber;
    this.address = address;
    this.role = role;
  }
}
