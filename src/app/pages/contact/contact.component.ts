import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {

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
