import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() categoryName: string;
  @Input() categoryDescription: string;
  @Input() categoryLink: string;
  navLink = "";

  constructor() { }

  ngOnInit(): void {
    this.navLink = "/documentaries/"+this.categoryLink.split(" ").join("-");
  }

}
