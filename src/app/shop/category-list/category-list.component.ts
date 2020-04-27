import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  selectedCategory: Category;

  @Output() category = new EventEmitter<Category>();
  @Output() page = new EventEmitter<Number>();

  constructor(
    private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(category?: Category) {
    this.selectedCategory = category;
    this.category.emit(category);
    this.page.emit(1);
  }

}
