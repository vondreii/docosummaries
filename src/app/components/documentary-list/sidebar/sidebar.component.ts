import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  allCategories: any;
  tagList = new Array();
  sideBarOptions = new Map();

  // Parameters
  @Input() selectedCategory: string; 
  @Input() selectedTag: string; 

  constructor(
    private categoryService: CategoryService,
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    // First, gets a list of all categories.
    this.getCategoryList().then(() => {
      // Based on this list, find all tags for each category and build the sidebar.
      this.buildSideBarOptions();
    });
  }

  async getCategoryList() {
    // returns all categories from the categories table in Firebase.
    this.allCategories = await this.categoryService.getAllCategories();
  }

  async buildSideBarOptions() {
    // For every category, get all the tags and put them into the map.
    for (let i = 0; i < this.allCategories.length; i++) {
      console.log(this.allCategories[i].name);
      this.sideBarOptions.set(this.allCategories[i].name, await this.tagService.getTagByCategory(this.allCategories[i].name));
    }

    //this.sideBarOptions.set("Disasters (Man Made)", await this.tagService.getTagByCategory('Disasters (Man Made)'));
    //this.sideBarOptions.set("Animals, Plants and Wildlife", await this.tagService.getTagByCategory('Animals, Plants and Wildlife'));

    // Convert the map into an array so it can be looped through in the HTML
    this.tagList = Array.from(this.sideBarOptions.values());
    console.log(this.tagList);
  }
  
}
