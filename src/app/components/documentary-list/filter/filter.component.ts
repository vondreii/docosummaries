import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  category: string;
  tag: string;

  constructor() { }

  ngOnInit(): void {
    this.category = "Animals, Plants and Wildlife";
    this.tag = "Diet And Exercise";
  }

}
