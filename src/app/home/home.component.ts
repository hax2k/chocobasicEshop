import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/products';
import { chocoItems } from './chocoitems';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product3:Array<Product> = chocoItems.slice(0, 4);
  product4:Product[] = chocoItems.slice(5, 9);
  products: Product[] = this.product3

  constructor() { }

  ngOnInit(): void {
    $('.main-flexslider').flexslider({
      directionNav: true,
      controlNav: false,
      animation: "fade",
      slideshowSpeed: 7000,
      prevText: "",
      nextText: "",
    });
  }
  walert(item: Product) {
    window.alert(item.name + " Added to cart")
  }

}
