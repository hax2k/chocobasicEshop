import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UslistComponent } from './uslist/uslist.component';

const routes: Routes = [
  {
    path:'uslist',
    component:UslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
