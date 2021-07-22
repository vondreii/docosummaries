import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  //@Input() paramItem: string;
  @Input() navLink: string;

  constructor() { }

  ngOnInit(): void {
    this.navLink = "/documentaries";
    console.log(this.navLink);
  }

}
