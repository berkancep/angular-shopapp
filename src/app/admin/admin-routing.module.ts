import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CategoryAdminListComponent } from './categories/category-admin-list/category-admin-list.component';
import { ProductsAdminListComponent } from './products/products-admin-list/products-admin-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'products/:mode/:id', component: ProductFormComponent },
      { path: 'products/:mode', component: ProductFormComponent },
      { path: 'products', component: ProductsAdminListComponent },

      { path: 'categories/:mode/:id', component: CategoryFormComponent },
      { path: 'categories/:mode', component: CategoryFormComponent },
      { path: 'categories', component: CategoryAdminListComponent },

      { path: 'orders', component: OrderListComponent },
    ]
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
