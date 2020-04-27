import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Category } from 'src/app/model/category';


@Component({
  selector: 'app-category-admin-list',
  templateUrl: './category-admin-list.component.html',
  styleUrls: ['./category-admin-list.component.css']
})
export class CategoryAdminListComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  getCategories() {
    return this.categoryRepository.getCategories();
  }

  deleteCategory(category: Category) {
    this.categoryRepository.deleteCategory(category);
  }

}
