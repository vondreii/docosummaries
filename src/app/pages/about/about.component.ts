import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      document.documentElement.scrollTop = 0;
    });
  }

  ngOnInit(): void {
  }

}
