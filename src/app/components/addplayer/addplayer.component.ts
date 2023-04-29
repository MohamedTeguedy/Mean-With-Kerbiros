import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  addPlayerForm!:FormGroup;

  id:any;
  findPlayer:any={}
  title:string='add player'
  
  constructor(
    private playerService:PlayerService,
    private router:Router,
    private activetiRoute:ActivatedRoute,
    private fb:FormBuilder
    
    ) { }

  ngOnInit(): void {
    // this.id=this.activetiRoute.snapshot.paramMap.get("id");
    // if (this.id) {
    //   this.title="Edit Player";
    //   this.playerService.getPlayerByName(this.id).subscribe(
    //     (data)=>{
    //       this.findPlayer=data
    //     }
    //   )
    // }
    this.addPlayerForm=this.fb.group(
      {
        Nom:[''],
        Position:[''],
       
        Age:['']
       
      }
    )
    
    

  }


  addPlayer(){
    if (this.id) {
      this.playerService.editPlayer(this.findPlayer).subscribe(
        (response)=>{
          this.router.navigate(["admin"]);
        }
      )
      
    }else{
      this.playerService.addPlayer(this.addPlayerForm.value).subscribe(
        (response)=>{
          console.log("here response",response.success);

          this.router.navigate(["admin"]);
        }
      )
    }
   
  }

}
