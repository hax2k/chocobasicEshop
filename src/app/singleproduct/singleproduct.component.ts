import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/products';
import { chocoItems } from '../home/chocoitems';
declare var $: any;
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails",
      start: function (slider: any) {
        $('body').removeClass('loading');
      }
    });

    this.getProduct();
  }
  getProduct() {
    let urlshot = this.route.snapshot.paramMap;
    let idOfProduct = Number(urlshot.get('id'));
    this.product = chocoItems.find(product => product.id == idOfProduct) as Product;
    // console.log(urlshot);
  }
}
