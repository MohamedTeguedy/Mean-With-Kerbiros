import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css']
})
export class PlayerinfoComponent implements OnInit {
  findPlayer:any=[]
  id:any

  constructor(private playerService:PlayerService,
   private activetRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activetRoute.snapshot.paramMap.get("id");

    this.playerService.getPlayerByName(this.id).subscribe(

      (data)=>{
        this.findPlayer=data
      },
     

    )
         console.log("med",this.findPlayer)
  }

}
