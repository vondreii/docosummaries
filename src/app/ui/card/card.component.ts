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
  @Input() categoryImg: string;
  navLink = "";

  //categoryImg = "../../../assets/images/cards-dark.jpg";

  constructor() { }

  ngOnInit(): void {
    this.navLink = "/documentariesList/"+this.categoryLink.split(" ").join("-");
  }

}
