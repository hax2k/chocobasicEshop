import { Injectable } from '@angular/core';
import { Order } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  userOrders: Order[] = []
  constructor() { }

  getOrders() {
    return this.userOrders;
  }
  addOrder(order: Order) {
    this.userOrders.push(order);
  }
  deleteOrder(order: Order) {
    let index = this.userOrders.indexOf(order);
    this.userOrders.splice(index, 1);
  }
}
