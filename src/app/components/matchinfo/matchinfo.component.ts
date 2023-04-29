import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css'],
})
export class MatchinfoComponent implements OnInit {
  id: any;
  findedMatch: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private matchService:MatchService) {}

  ngOnInit(): void {
    
    this.id = this.activateRoute.snapshot.paramMap.get('id');
   
    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        console.log("data", data);
        
        this.findedMatch=data.match
      }
    )
      
      
  }
}
