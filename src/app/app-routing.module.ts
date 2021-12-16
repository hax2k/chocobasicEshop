import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api/api.component';
import { Error404Component } from './error404/error404.component';
import { MainComponent } from './main/main/main.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch:'full'
  },
  {
    path: 'api',
    component:ApiComponent,
    loadChildren:()=>import('./api/api.module').then(m=>m.ApiModule)
  },
  {
    path: 'main',
    component:MainComponent,
    loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
