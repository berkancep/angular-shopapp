import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryRepository } from 'src/app/model/category.repository';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  editing: boolean = false;
  category: Category = new Category();

  constructor(private activatedRoute: ActivatedRoute,
    private categoryRepository: CategoryRepository,
    private router: Router) {
    this.editing = activatedRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      this.category = categoryRepository.getCategory(parseInt(activatedRoute.snapshot.params['id']));

    }
  }

  saveCategory(form: NgForm) {
    if (form.valid) {
      this.categoryRepository.saveCategory(this.category);
      this.router.navigateByUrl('/admin/main/categories')
    }
  }

  ngOnInit() {
  }

}
