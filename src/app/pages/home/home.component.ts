import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  documentariesLink: any = "/documentariesList";
  tagsList: any;
  tagName: string
  categoryList: any;

  constructor(
    private tagService: TagService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getTagsList();
    this.getCategoryList();
  }

  async getTagsList() {
    this.tagsList = await this.tagService.getAllTags();
  }

  async getCategoryList() {
    this.categoryList = await this.categoryService.getAllCategories();
  }
}
