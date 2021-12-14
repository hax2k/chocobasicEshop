import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'shop', component:ShopComponent},
  {path:'product/:id', component:SingleproductComponent},
  {path:'cart', component:CartComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
