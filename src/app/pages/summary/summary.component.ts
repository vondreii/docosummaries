import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { DocumentaryService } from 'src/app/services/documentary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  post: string;
  index: string;
  prefix: string;
  currentDoco: any = new Object();
  currentTag: string = "";

  constructor(
    private route: ActivatedRoute,
    private docoService: DocumentaryService,
    private categoryService: CategoryService
  ) { 
    this.route.params.subscribe(params => {
      this.showArticle();
      this.getCurrentDoco();

    });
  }

  ngOnInit(): void {

  }

  showArticle() {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/summaries/' +  articleName + '.md'; 
  }

  async getCurrentDoco() {
    let href = document.location.href;
    this.index = href.substring(href.lastIndexOf("-")+1, href.length);
    this.prefix = href.substring(href.lastIndexOf("/")+1, href.lastIndexOf("-"));

    let currentCategory = await this.categoryService.getCategoryByPrefix(this.prefix);
    let docosList = await this.docoService.getDocumentaryByIndex(this.index);

    for(let i=0; i<docosList.length; i++) {
      if(docosList[i].categoryName === currentCategory[0].name) {
        this.currentDoco = docosList[i];
        this.currentTag = docosList[i].tagName;
      }
    }
  }

}
