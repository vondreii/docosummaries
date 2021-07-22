import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() paramName: string;
  navLink = "";

  constructor() { }

  ngOnInit(): void {
    this.navLink = "/documentaries/"+this.paramName;
    console.log(this.navLink);
  }

}
