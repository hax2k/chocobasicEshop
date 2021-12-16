import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/products';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  @Input() product:Product;
  @Output() notify = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {

  }
  reltoparent(){
    this.notify.emit()

  }
}
