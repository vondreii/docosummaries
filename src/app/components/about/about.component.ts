import { Component, OnInit } from '@angular/core';

@Component({
  template: `<app-about-description></app-about-description>
  <app-contributors></app-contributors>`
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
