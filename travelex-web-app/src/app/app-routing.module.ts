// the router module takes care to route to the components which we want to show our users, it also handles the unavailable router with the ** symbol to redirect to the starting point and don't break the application if a user want to react an unavailable route

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'travels', component: TravelsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
