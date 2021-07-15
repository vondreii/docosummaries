import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentRoute: string;

  constructor(private route: ActivatedRoute) { 
    // this.route.params.subscribe(params => {
    //    this.currentRoute = window.location.pathname.substring(1,window.location.pathname.length);
    //    console.log(this.currentRoute);
    // });
    //let id = this.route.snapshot.params;
    //console.log(id);
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(
    //   (params: any) => {
    //     console.log("Hello");
    //     this.currentRoute = window.location.pathname.substring(1,window.location.pathname.length);
    //     console.log(this.currentRoute);
    //   }
    // )
  }

}
