import { Component, OnInit } from '@angular/core';
import { Product, CartItem, Billing } from 'src/models/products';
import { CartserviceService } from '../services/cartservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Billing:Billing;
  finalkart: CartItem[] = []
  cartItem: Product[] = []

  constructor(private cartS: CartserviceService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.Billing=new Billing();
    this.Billing.Items=new Array<CartItem>();
    this.cartItem = this.cartS.getAllItems();
    for(let product of this.cartItem) {
      let obj=new CartItem();
      obj.product=product;
      obj.productquantity=1;
      obj.subtotal=obj.productquantity*obj.product.price;

      this.Billing.Items.push(obj);
    }

    console.log(this.cartItem)

  }

  removeItem(item: CartItem) {
    let index = this.Billing.Items.indexOf(item);
    this.Billing.Items.splice(index, 1);
    this.cartS.deleteItem(item.product);
    this.toastService.error("Removed from cart")
  }


}
