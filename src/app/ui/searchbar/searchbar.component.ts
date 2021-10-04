import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { DocumentaryService } from 'src/app/services/documentary.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchComponent implements OnInit {
  // Declare search string elements
  
  @Input() searchLocation: string = "";

  title = 'angular-text-search-highlight';
  searchText = '';
  documentariesList: any;
  tagsList: any;
  categoriesList: any; 
  searchString: Array<string> = new Array<string>();

  constructor(
    private categoryService: CategoryService,
    private docoService: DocumentaryService,
    private tagService: TagService
  ) { }

  // Build search string
  ngOnInit(): void {
    this.addCatagories();
    this.addTags();
    this.addDocos();
  }

  // Pull categories list from Firebase and add to the search string
  async addCatagories() {
    this.categoriesList = await this.categoryService.getAllCategories();
    this.categoriesList.forEach(category => {
      this.searchString.push("START_STR" + category.name + " (Category)END_STR @@@" + "/documentariesList/" + category.name + "@@@");
    });
  }

  // Pull tags list from Firebase and add to the search string
  async addTags() {
    this.tagsList = await this.tagService.getAllTags();
    this.tagsList.forEach(tag => {
      this.searchString.push("START_STR" + "#" + tag.name + "END_STR @@@" + "/documentariesList/" + tag.name + "@@@");
    });
  }

  
  // Pull docos list from Firebase and add to the search string
  async addDocos() {
    this.documentariesList = await this.docoService.getAllDocumentaries();
    for (let i = 0; i < this.documentariesList.length; i++) {
      let doco =  this.documentariesList[i];
      let docoDetails = doco.description + " " + doco.categoryName + " ";
      for (let j = 0; j < doco.tagName.length; j++) {
        docoDetails += doco.tagName[j];
      };
      this.searchString.push("START_STR" + doco.name + "END_STR" + docoDetails + "@@@" + "/documentariesList/summary/" + doco.id + "@@@");
    }
  }

  // When a link is clicked
  onSelect(debug) {
    console.log(debug);
    this.searchText = '';
  }
}