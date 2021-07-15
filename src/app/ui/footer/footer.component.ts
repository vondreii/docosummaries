import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  documentaryList: any;
  categoryList: any;
  tagsList: any;

  constructor(
    private categoryService: CategoryService,
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.getTagsList();
    this.getDocumentaryList();
  }

  getTagsList() {
    this.tagsList = this.tagService.getAllTags();
  }

  getCategoryList() {
    this.categoryList = this.categoryService.getAllCategories();
  }
  
  getDocumentaryList() {
    // TODO: Replace with docos instead of categories
    this.documentaryList = this.categoryService.getAllCategories();
  }
}
