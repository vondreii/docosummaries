import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  post: string; 
  href: string; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.href = window.location.href; 
    this.post = './assets/summaries/' +  articleName + '.md'; 
  }

}
