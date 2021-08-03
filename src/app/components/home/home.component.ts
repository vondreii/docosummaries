import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  documentariesLink: any = "/documentaries";
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

  getTagsList() {
    this.tagsList = this.tagService.getAllTags();
    console.log("Tags");
    console.log(this.tagsList);
  }

  getCategoryList() {
    this.categoryList = this.categoryService.getAllCategories();
    // console.log("Categories");
    console.log(this.categoryList);
  }
}
