import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public categories: Category[] = [];
  routerCategory: Category;
  constructor(private CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategory();
  }

  //category
  getCategory() {
    this.CategoryService.getCategory().subscribe((a) => {
      this.categories = a;
    });
  }

  //tıkla category
  tiklaCategory(c: Category) {
    this.routerCategory = c;
  }

  //active
  categoryActiveClass(c: Category) {
    if (c == this.routerCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
