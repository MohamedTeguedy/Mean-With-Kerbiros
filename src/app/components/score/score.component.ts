import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input()matchInput:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  score(a:any,b:any){
    if (a>b) {
      return "Win";
    }else if (a<b) {
      return "Loss";
    }else{
      return "Draw";
    }

  }

  
  color(a:number,b:number){
    if (a>b) {
      return "green";
    }else if (a<b) {
      return "orange";
    }else{
      return "blue";
    }
  }




}
