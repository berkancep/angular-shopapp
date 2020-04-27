import { Injectable, OnInit } from '@angular/core'
import { Product } from './product'
import { RestService } from './rest.service';
import { Category } from './category';

@Injectable()


export class ProductRepository {

    private products: Product[];

    constructor(private restService: RestService) {
        this.restService.getProducts().subscribe(data => {
            this.products = data;
        });
    }

    getProduct(id: number): Product {
        return this.products.find(i => i.id === id);
    }

    getProducts(category?: Category): Product[] {
        if (category)
            return this.products.filter(i => i.category == category.name);
        else
            return this.products;
    }

    saveProduct(product: Product) {
        if (product.id == null || product.id == 0) {
            this.restService.addProduct(product).subscribe(p => {
                this.products.push(p);
            })
        } else {
            this.restService.updateProduct(product).subscribe(data => {
                this.products.splice(this.products.findIndex(p => p.id == product.id), 1, data);
            })
        }
    }

    deleteProduct(product: Product) {
        this.restService.deleteProduct(product).subscribe(data => {
            this.products.splice(this.products.findIndex(p => p.id == data.id), 1);
        })
    }


}