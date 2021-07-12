import { Component, OnInit } from '@angular/core';

@Component({
  template: `<app-jumbotron></app-jumbotron>
  <app-browse-by-tags></app-browse-by-tags>
  <app-browse-by-categories></app-browse-by-categories>`
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
