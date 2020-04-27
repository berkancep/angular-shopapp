import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { ProductsAdminListComponent } from './products/products-admin-list/products-admin-list.component';
import { CategoryAdminListComponent } from './categories/category-admin-list/category-admin-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';


@NgModule({
  declarations: [AdminComponent, AuthComponent, CategoryFormComponent, ProductFormComponent, OrderListComponent, ProductsAdminListComponent, CategoryAdminListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard]
})
export class AdminModule { }
