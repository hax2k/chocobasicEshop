import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/models/products';
import { chocoItems } from '../home/chocoitems'
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Product[] = chocoItems;
  constructor(private carts: CartserviceService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addToCart(item: Product) {
    this.carts.addToCart(item)
    this.toastr.success("Successfully added to cart ");
  }
}
