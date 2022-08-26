import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  {path:'products/:id', component:ProductItemComponent },
  {path: 'cart', component: CartComponent },
  {path:'confirmation', component:ConfirmationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
