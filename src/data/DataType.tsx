export default class Pizza {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity?: number;
  static id: number;

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    quantity?: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }
}
