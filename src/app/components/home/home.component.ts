import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 Mohamed:any;
 path:any="assets/images/logo_2.png"
  constructor() { }

  ngOnInit(): void {
    this.Mohamed="Contact"
    console.log(this.Mohamed)
  }

}
