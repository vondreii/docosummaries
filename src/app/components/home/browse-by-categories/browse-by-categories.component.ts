import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-browse-by-categories',
  templateUrl: './browse-by-categories.component.html',
  styleUrls: ['./browse-by-categories.component.scss']
})
export class BrowseByCategoriesComponent implements OnInit {

  categoryList: any;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryList = this.categoryService.getAllCategories();
  }
}
