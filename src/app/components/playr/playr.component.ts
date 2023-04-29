import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playr',
  templateUrl: './playr.component.html',
  styleUrls: ['./playr.component.css']
})
export class PlayrComponent implements OnInit {
  @Input()playerInput:any;
  constructor() { }

  ngOnInit(): void {
  }

}
