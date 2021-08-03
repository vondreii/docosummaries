import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';
import { DocumentaryService } from 'src/app/services/documentary.service';

@Component({
  templateUrl: 'documentary-list.component.html',
  styleUrls: ['documentary-list.component.scss']
})

export class DocumentaryListComponent implements OnInit {

  // Selected tag and category based on URL
  selected: string;

  // Get all Categories
  allCategories: any;

  // Build Sidebar. Nest Tags underneath their Categories.
  sideBarOptions = new Map();
  tagList = new Array();
  
  docoList: any;
  isCategory: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private tagService: TagService,
    private docoService: DocumentaryService
  ) { 
    this.route.params.subscribe(params => {
      this.getSelectedParams().then(() => {
        this.getCategoryList().then(() => {
          this.buildSideBarOptions().then(() => {
            this.listDocos();
          });
        });
      });
    });
  }

  ngOnInit(): void {
    this.getSelectedParams().then(() => {
      this.getCategoryList().then(() => {
        this.buildSideBarOptions().then(() => {
          this.listDocos();
        });
      });
    });
  }

  async getCategoryList() {
    // returns all categories from the categories table in Firebase.
    this.allCategories = await this.categoryService.getAllCategories();
  }

  async buildSideBarOptions() {
    // For every category, get all the tags and put them into the map.
    for (let i = 0; i < this.allCategories.length; i++) {
      this.sideBarOptions.set(this.allCategories[i].name, await this.tagService.getTagByCategory(this.allCategories[i].name));
    }

    //this.sideBarOptions.set("Disasters (Man Made)", await this.tagService.getTagByCategory('Disasters (Man Made)'));
    //this.sideBarOptions.set("Animals, Plants and Wildlife", await this.tagService.getTagByCategory('Animals, Plants and Wildlife'));

    // Convert the map into an array so it can be looped through in the HTML
    this.tagList = Array.from(this.sideBarOptions.values());
  }

  listDocos() {
    // Find if selected is a tag or a category
    this.tagList.forEach(async tag => {
      if(tag[0].name == this.selected) {
        // TODO PRINT THE LIST RETURNED ONTO THE SCREEN
        // TEST WITH MORE DOCOS
        this.isCategory = false;
        this.docoList = await this.docoService.getDocumentaryByTag(this.selected);
        console.log(this.docoList);
      }
    });
    this.allCategories.forEach(async category => {
      if(category.name == this.selected) {
        // TODO PRINT THE LIST RETURNED ONTO THE SCREEN
        // TEST WITH MORE DOCOS
        this.isCategory = true;
        this.docoList = await this.docoService.getDocumentaryByCategory(this.selected);
        console.log(this.docoList);
      }
    });
  }

  async getSelectedParams() {
    let href = document.location.href;
    href = href.substring(href.lastIndexOf("/")+1, href.length);
    href = href.split('-').join(' ');
    href = href.split('%28').join('(');
    href = href.split('%29').join(')');
    this.selected = href;
  }
}
