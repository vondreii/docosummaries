import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { DocumentaryService } from 'src/app/services/documentary.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  videoTest="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1";

  constructor(
    private route: ActivatedRoute,
    private docoService: DocumentaryService,
    private categoryService: CategoryService
  ) { 
    this.route.params.subscribe(params => {
      this.showArticle();
      this.getCurrentDoco();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
