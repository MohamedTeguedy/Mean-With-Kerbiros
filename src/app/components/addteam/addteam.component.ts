import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
  team:any={};
  addTeamForm!:FormGroup;
  constructor(private teamService :TeamService,
    private router:Router) { }

  ngOnInit(): void {
   
  }
  addTeam(){
    this.teamService.addTeam(this.team).subscribe(
      (response)=>{
        console.log("here response",response.success);
        this.router.navigate(["admin"]);
      }
    )
   
  }
}
