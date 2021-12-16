import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AvailabilityComponent } from './home/availability/availability.component';
import { ApidataComponent } from './apidata/apidata.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    CartComponent,
    SingleproductComponent,
    AboutComponent,
    ContactComponent,
    AvailabilityComponent,
    ApidataComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    HeaderModule
  ]
})
export class MainModule { }
