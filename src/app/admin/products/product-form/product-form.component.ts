import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductRepository } from 'src/app/model/product.repository';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();

  constructor(private activatedRoute: ActivatedRoute,
    private productRepository: ProductRepository,
    private router: Router) {
    this.editing = activatedRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      this.product = productRepository.getProduct(parseInt(activatedRoute.snapshot.params['id']));

    }
  }

  saveProduct(form: NgForm) {
    if (form.valid) {
      this.productRepository.saveProduct(this.product);
      this.router.navigateByUrl('/admin/main/products')
    }
  }



  ngOnInit() {
  }

}
