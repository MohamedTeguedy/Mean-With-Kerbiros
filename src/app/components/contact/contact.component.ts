import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
Mohamed="Contact"
  constructor() { }

  ngOnInit(): void {
    // this.Mohamed="blabal"
    console.log(this.Mohamed);
  }
  

}
