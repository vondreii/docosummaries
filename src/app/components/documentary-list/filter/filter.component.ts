import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  category: string;
  tag: string = "";
  href: any;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.getTag();
      this.getCategory();
    });
  }

  ngOnInit(): void {
    this.getTag();
    this.getCategory();
  }

  getTag() {
    let href = document.location.href;
    href = href.substring(href.lastIndexOf("/")+1, href.length);
    href = href.split('%20').join(' ');
    console.log("route: " + href);

    this.tag = href;
  }

  getCategory() {
    let href = document.location.href;
    href = href.substring(href.lastIndexOf("/")+1, href.length);
    href = href.split('%20').join(' ');
    console.log("route: " + href);

    this.category = href;
  }

}
