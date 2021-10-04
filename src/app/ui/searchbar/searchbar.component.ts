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
  
  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]

  @Input() searchLocation: string = "";
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
  }

  async addCatagories() {
    this.categoriesList = await this.categoryService.getAllCategories();
    this.categoriesList.forEach(category => {
      this.searchString.push("START_STR" + category.name + " (Category) END_STR -@" + category.link);
    });
  }

  // Pull categories list from Firebase and add to the search string
  async addTags() {
    this.tagsList = await this.tagService.getAllTags();
    this.tagsList.forEach(tag => {
      this.searchString.push("START_STR" + "#" + tag.name + " END_STR -@" + tag.link);
    });
  }

  onSelect(debug) {
    console.log(debug);
    this.searchText = '';
  }

}

