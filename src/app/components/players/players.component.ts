import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any

  
  constructor() { }

  ngOnInit(): void {
    this.players=[
      {Nom:"Messi",Age:35,Position:"AT"},
      {Nom:"Ronaldo",Age:35,Position:"AT"},
      {Nom:"Insta",Age:40,Position:"MIL"},
      
    ]
  }

}
