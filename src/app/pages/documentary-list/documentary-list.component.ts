import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';
import { DocumentaryService } from 'src/app/services/documentary.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'documentary-list.component.html',
  styleUrls: ['documentary-list.component.scss']
})

export class DocumentaryListComponent implements OnInit {

  count = 0;
  prefix: string = "C01";
  selected: string;
  allCategories: any;
  sideBarOptions = new Map();
  tagList = new Array();
  docoList: any;
  isCategory: boolean = true;
  tagCategory: string = "";
  noDocumentaries = false;

  // Build Sidebar, Initialize docos list for selected category/tag
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private tagService: TagService,
    private docoService: DocumentaryService,
    private router: Router
  ) { 
    this.route.params.subscribe(params => {
      this.toggleLoading('block', 'none');
      this.noDocumentaries = false;
      this.docoList = [];
      document.documentElement.scrollTop = 0;
      this.getSelectedParams().then(() => {
        this.getCategoryList().then(() => {
          this.buildSideBarOptions().then(() => {
            this.listDocos().then(res => {
              this.toggleLoading('none', 'block');
            });
          });
        });
      });
    });
  }

  ngOnInit(): void {
      this.toggleLoading('block', 'none');
  }

  // Get the tag or category selected based on the URL.
  async getSelectedParams() {
    let href = document.location.href;
    if(href.indexOf("START_STR") > 0) {
      href = href.substring(href.lastIndexOf("START_STR"), href.length);
    }
    else {
      href = href.substring(href.lastIndexOf("/")+1, href.length);
    }
    href = href.split('%20').join(' ');
    href = href.split('%0A').join('');
    href = href.split('START_STR').join('');
    href = href.split('-').join(' ');
    href = href.split('%28').join('(');
    href = href.split('%29').join(')');
    this.selected = href;
    if(this.selected === 'documentariesList') {
      this.changeSelection('Health');
    }
  }

  // returns all categories from the categories table in Firebase.
  async getCategoryList() {
    this.allCategories = await this.categoryService.getAllCategories();
  }

  // For every category, get all the tags and put them into the map.
  async buildSideBarOptions() {
    for (let i = 0; i < this.allCategories.length; i++) {
      this.sideBarOptions.set(this.allCategories[i].name, await this.tagService.getTagByCategory(this.allCategories[i].name));
    }
    this.tagList = Array.from(this.sideBarOptions.values());
    
    for (let i = 0; i < this.tagList.length; i++) {
      let findCategoryOfTag = "";
      for (let j = 0; j < this.tagList[i].length; j++) {
        if(this.tagList[i][j].name === this.selected) {
            findCategoryOfTag = this.tagList[i][j].categoryName;
        }
      }
      this.tagList[i].category = this.allCategories[i].name;
      
      if(this.allCategories[i].name === this.selected || findCategoryOfTag !== "")
        this.tagList[i].expanded = true;
      else 
        this.tagList[i].expanded = false;
    }
    this.toggleTagVisibility("sidebar-desktop", "none");
  }

  // Compile list of docos to show in the right based on tag/category selected
  async listDocos() {
    this.count = 0;
    this.tagList.forEach(tags => {
      tags.forEach(async tag => {
          if(tag.name == this.selected) {
          this.isCategory = false;
          let tag = await this.tagService.getTagByName(this.selected);
          let category = await this.categoryService.getCategoryByName(tag[0].categoryName);
          this.tagCategory = category[0].name;
          this.prefix = category[0].prefix;
          this.docoList = await this.docoService.getDocumentaryByTagLimited(this.selected, this.numberFormat(this.count), 5);

          // Firebase bug
          if(this.docoList.length === 1) {
            //this.docoList = await this.docoService.getDocumentaryByTag("");
            //this.docoList = await this.docoService.getDocumentaryByTagLimited(this.selected, this.numberFormat(this.count), 5);
          }
          if(this.docoList.length === 0) {
            this.noDocumentaries = true;
          }
        }
      });
    });       
    this.allCategories.forEach(async category => {
      if(category.name == this.selected) {
        this.isCategory = true;
        let category = await this.categoryService.getCategoryByName(this.selected);
        this.prefix = category[0].prefix;
        this.docoList = await this.docoService.getDocumentaryByCategoryLimited(this.selected, this.numberFormat(0), 5);
        
        // Firebase bug
        if(this.docoList.length === 1) {
          //this.docoList = await this.docoService.getDocumentaryByTag("");
          //this.docoList = await this.docoService.getDocumentaryByCategoryLimited(this.selected, this.numberFormat(0), 5);
        }
        if(this.docoList.length === 0) {
          this.noDocumentaries = true;
        }
        this.count += 5;
      }
    });
  }

  // Convert '1' to '00001' (the format of a doco's index)
  numberFormat(num: number) {
    var str = "" + num
    var pad = "00000"
    return pad.substring(0, pad.length - str.length) + str
  }

  // onScroll Listener
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.moreDocos();
  } 

  // When the user scrolls, loads the next part of the list
  async moreDocos() {
    if(!this.docoList) {
      return;
    }
    let newDocos = []
    if(this.isCategory) {
      newDocos = await this.docoService.getDocumentaryByCategoryLimited(this.selected, this.numberFormat(this.count), 5)
    }
    else {
      newDocos = await this.docoService.getDocumentaryByTagLimited(this.selected, this.numberFormat(this.count), 5)
    }
    if(newDocos.length > 0) {
      newDocos.forEach(newDoco => {
        if(!this.exists(newDoco.index)) {
          this.docoList.push(newDoco);
        }
      });
      this.count = +newDocos[newDocos.length-1].index;
    }
  }

  // Checks if a record already exists in the doco list being displayed on the page
  exists(index) {
    return this.docoList.some(function(el) {
      return el.index === index;
    }); 
  }

  // Toggles the visibility of the 'loading' text
  toggleLoading(loaderStyle, loadedStyle) {
    let loader = document.getElementById('loader');
    let loaded = document.getElementById('loaded');
    
    if(loader !== null) {
      loader.style.display = loaderStyle;
    }
    if(loaded !== null) {
      loaded.style.display = loadedStyle;
    }
  }

  // Change what is selected on the sidebar menu
  async changeSelection(paramName: string) {
    this.noDocumentaries = false;
    this.docoList = [];
    this.toggleLoading('block', 'none');
    this.closeNav();
    await new Promise(resolve => setTimeout(resolve, 300));
    let nav = "/documentariesList/"+paramName.split(" ").join("-").split("(").join("%28").split(")").join("%29");
    this.router.navigateByUrl(nav);
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Sets the width of the sidebar when it is opened
  async openNav() {
    this.toggleTagVisibility("sidebar-mobile", "none");
    document.getElementById("sidebar-mobile").style.width = "300px";
    await new Promise(resolve => setTimeout(resolve, 500));
    this.toggleTagVisibility("sidebar-mobile", "block");
  }

  // Closes the sidebar and hides the text
  async closeNav() {
    this.toggleTagVisibility("sidebar-mobile", "none");
    await new Promise(resolve => setTimeout(resolve, 10));
    document.getElementById("sidebar-mobile").style.width = "0";
  }

  // Displays or removes tags in the column when collapsing sidebar on mobile
  toggleTagVisibility(sidebar: string, display: string) {
    if(document.getElementById(sidebar)) {
      if(document.getElementById(sidebar).children) {
        var tagLinks = Array.from(document.getElementById(sidebar).children as HTMLCollectionOf<HTMLElement>);  
        tagLinks.forEach(element => {
          element.style.display = display;
        });
      }
    }
  }
}
