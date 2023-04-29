import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any=[];
  constructor() { }

  ngOnInit(): void {
    this.matches=[
      {id:1,teamOne:"CA",teamTwo:"EST",scoreOne:0,scoreTwo:0},
      {id:2,teamOne:"FCB",teamTwo:"RMD",scoreOne:0,scoreTwo:5},
      {id:3,teamOne:"ATM",teamTwo:"SEV",scoreOne:4,scoreTwo:2},
      {id:4,teamOne:"JUV",teamTwo:"ROM",scoreOne:1,scoreTwo:2},
    ];
  }

}
