import { OrderserviceService } from 'src/app/services/orderservice.service';
import { Component, OnInit } from '@angular/core';
import { Product, CartItem, Billing, Order } from 'src/models/products';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Billing: Billing;
  order:Order;
  finalkart: CartItem[] = []
  cartItem: Product[] = []
  lenth: number = 0;

  constructor(private cartS: CartserviceService, private toastService: ToastrService,private Orderservice: OrderserviceService) { }

  ngOnInit(): void {
    this.Billing = new Billing();
    this.order = new Order();
    this.Billing.Items = new Array<CartItem>();
    this.cartItem = this.cartS.getAllItems();
    for (let product of this.cartItem) {
      let obj = new CartItem();
      obj.product = product;
      obj.productquantity = 1;
      obj.subtotal = obj.productquantity * obj.product.price;

      this.Billing.Items.push(obj);
    }
    this.getCartCount();
  }

  getCartCount() {
    this.lenth = this.Billing.Items.length;
  }

  removeItem(item: CartItem) {
    let index = this.Billing.Items.indexOf(item);
    this.Billing.Items.splice(index, 1);
    this.cartS.deleteItem(item.product);
    this.toastService.error("Removed from cart")
    this.getCartCount();
  }
addOrder(){
  this.order.amount= this.Billing.GrandTotal;
  this.Orderservice.addOrder(this.order);
  this.toastService.success("Order Placed");
  console.log(this.order)
  this.order =  new Order();

}


}
