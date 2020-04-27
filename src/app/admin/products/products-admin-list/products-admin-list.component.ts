import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/model/product.repository';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products-admin-list',
  templateUrl: './products-admin-list.component.html',
  styleUrls: ['./products-admin-list.component.css']
})
export class ProductsAdminListComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit() {
  }

  getProducts() {
    return this.productRepository.getProducts();
  }

  deleteProduct(product: Product) {
    this.productRepository.deleteProduct(product);
  }

}
