import { Injectable, OnInit } from '@angular/core'
import { RestService } from './rest.service';
import { Category } from './category';

@Injectable()


export class CategoryRepository {

    private categories: Category[];

    constructor(private restService: RestService) {
        this.restService.getCategories().subscribe(data => {
            this.categories = data;
        });
    }


    getCategory(id: number): Category {
        return this.categories.find(i => i.id === id);
    }

    getCategories(): Category[] {
        return this.categories;
    }

    saveCategory(category: Category) {
        if (category.id == null || category.id == 0) {
            this.restService.addCategory(category).subscribe(c => {
                this.categories.push(c);
            })
        } else {
            this.restService.updateCategory(category).subscribe(data => {
                this.categories.splice(this.categories.findIndex(c => c.id == category.id), 1, data);
            })
        }
    }

    deleteCategory(category: Category) {
        this.restService.deleteCategory(category).subscribe(data => {
            this.categories.splice(this.categories.findIndex(c => c.id == data.id), 1);
        })
    }


}