import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { UslistComponent } from './uslist/uslist.component';
import { ApiComponent } from './api/api.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    UslistComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    HeaderModule

  ]
})
export class ApiModule { }
