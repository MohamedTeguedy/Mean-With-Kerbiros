import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title:string="drobhsaD"
  actualData:any
  matches:any=[];
  players:any=[];
  teams:any=[]

  constructor(private router:Router,
    private matchService:MatchService,
    private playerService:PlayerService,
    private teamService:TeamService) { }

  ngOnInit(): void {
    this.actualData=new Date()
    
    // this.teams=[
    //   {Nom:"Atm",Owner:"Med",Foundation:"1953",Stadium:"GFJGE"},
    //   {Nom:"RMD",Owner:"SIDI",Foundation:"1967",Stadium:"JDKHDK"},
    //   {Nom:"PSG",Owner:"AHMED",Foundation:"1950",Stadium:"DHKDJ"},
     
    // ]
   
    // this.players=[
    //   {Nom:"Messi",Age:35,Position:"AT"},
    //   {Nom:"Ronaldo",Age:35,Position:"AT"},
    //   {Nom:"Insta",Age:40,Position:"MIL"},
    // ]


    // this.matches=JSON.parse(localStorage.getItem("matches")||"[]")
    this.matchService.getMatch().subscribe(
      (data)=>{
        this.matches=data.matchesTab;
      }
    );

    this.teamService.getTeam().subscribe(
      (data)=>{
        this.teams=data.teamTab
      }
    )


    this.playerService.getAllPlayer().subscribe(
      (data)=>{
        this.players=data.playersTab;
      }
    )


  }


  // deleteMatch(id:any){
   
  //   for(let i =0;i< this.matches.length;i++){
  //     if(this.matches[i].id==id){
  //       this.matches.splice(i,1)
  //       break;
  //     }
     

  //   }
  //    localStorage.setItem("matches",JSON.stringify(this.matches))
  // }

  deleteMatch(id:any){
    this.matchService.deleteMatch(id).subscribe(
      ()=>{
        this.matchService.getMatch().subscribe(
          (data)=>{
          
            this.matches=data.matchesTab;
          }
        )
      }
    )
  }


  goToDisplay(x:any){
    this.router.navigate([`matchinfo/${x}`]);
  }

  goToEdit(x:any){
    this.router.navigate([`editmatch/${x}`])

  }

  goToDisplayPlayer(x:string){
    this.router.navigate([`playerinfo/${x}`]);
  }

  goToEditPlayer(x:any){
    this.router.navigate([`editmatch/${x}`])

  }

  DeletePlayer(id:any){
    this.playerService.deletePlayer(id).subscribe(
      ()=>{
        this.playerService.getAllPlayer().subscribe(
          (data)=>{
            this.players=data;
          }
        )
      }
    )
  }

  gotoEditPlayer(x:any){
    this.router.navigate([`editplayer/${x}`]);
  
  }


}
