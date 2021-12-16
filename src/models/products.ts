export class Order {
  fname: string;
  lname: string;
  address1: string;
  address2: string;
  zipcode: string;
  amount: number;
}

export class UserData {
  name: string;
  designation: string;
  imguri: string;
}

export class Product {
  id: number;
  name: string;
  price: number;
  imguri: string;
  quantity: number;
  description: string;
}

export class Billing {

  Items: CartItem[];
  get GrandTotal(): number {
    let a = 0;
    for (let item of this.Items) {
      a = a + item.subtotal;
    }
    return a;
  };
}
export class CartItem {
  product: Product;
  productquantity: number = 1;
  // subtotal: number;
  private _subtotal: number;
  get subtotal(): number {
    return this.productquantity * this.product.price;
  }
  set subtotal(value: number) {
    this._subtotal = value;
  }
}

export class University {
  state_province: string
  country: string;
  web_pages: string[];
  name: string;
  alpha_two_code: string;
  domains: string[];
}
