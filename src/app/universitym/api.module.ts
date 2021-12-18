import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { UslistComponent } from './uslist/uslist.component';
import { ApiComponent } from './api/api.component';
import { HeaderModule } from '../header/header.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    UslistComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    HeaderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule


  ]
})
export class ApiModule { }
