import { Component, OnInit } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { Cart } from '../model/cart';
import { Router } from '@angular/router';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    styleUrls: ['shop.component.css']
})

export class ShopComponent implements OnInit {

    productsPerPage: number = 3;
    selectedPage: number = 1;
    selectedProducts: Product[] = [];

    selectedCategory: Category;

    constructor(
        private productRepository: ProductRepository
    ) { }

    ngOnInit() {

    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map((a, i) => i + 1);
    }

    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productsPerPage;
        this.selectedProducts = this.productRepository.getProducts(this.selectedCategory)
        return this.selectedProducts.slice(index, index + this.productsPerPage);
    }

    getCategory(category: Category) {
        this.selectedCategory = category;
    }

    changePage(page: number) {
        this.selectedPage = page;
    }

    changePerSize(size: number) {
        this.productsPerPage = size;
        this.changePage(1);
    }


}