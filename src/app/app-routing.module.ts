import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './items/items.component';
import { AnItemComponent } from './an-item/an-item.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './success/success.component'
const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'AnItem/:id', component: AnItemComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success', component: SuccessComponent },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
