import { Injectable } from '@angular/core';
import { Product } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  cartItems: Product[] = [];

  constructor() { }

  getAllItems() {
    return this.cartItems;
  }

  getCartCount() {
    return this.cartItems.length;
  }

  addToCart(item: Product) {
    this.cartItems.push(item);
  }
  deleteItem(item: Product) {
    let index = this.cartItems.indexOf(item);
    this.cartItems.splice(index, 1)
  }
  deleteAllItem() {
    this.cartItems = [];
  }
}
