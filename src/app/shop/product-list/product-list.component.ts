import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Cart } from 'src/app/model/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private cart: Cart,
    private router: Router) { }

  @Input() products: Product[] = [];
  selectedProduct: Product;

  ngOnInit() {
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');
  }

  displayDetails(product: Product) {
    this.selectedProduct = product;
  }

}
