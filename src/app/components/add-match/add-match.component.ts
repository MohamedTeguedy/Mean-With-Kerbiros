import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  
  
  matchId:any={}
  addMatchForm:any=FormGroup;
  id:any
  findMatch:any={}
  title:string="Add Match"


  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private ativateRoute:ActivatedRoute,
    private matchService:MatchService) {
   
   }

  ngOnInit(): void {
    this.id=this.ativateRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title="Edit Match";
      this.matchService.getMatchById(this.id).subscribe(
        (data)=>{
          this.findMatch=data.match
        }
      )
    }

    // this.title="edit match"
    // this.id=this.ativateRoute.snapshot.paramMap.get("id")
   
    // if (this.id) {
    //   let matches=JSON.parse(localStorage.getItem("matches")||"[]")
    //   this.findMatch=matches.find(
    //     (obj:any)=>{
    //       return obj.id=this.id
    //     }
    //   )
      
    //}


     this.addMatchForm=this.formBuilder.group({
        teamOne:[''],
        teamTwo:[''],
        scoreOne:[''],
        scoreTwo:[''],
     })


  }

  //add matches to locale storage

  // addMatch(obj:any){

  //   let T=JSON.parse(localStorage.getItem("matches")||"[]");
  //   let matchId=JSON.parse(localStorage.getItem("matchId")||"1");
  //   obj.id=matchId
  //   T.push(obj)
  //   localStorage.setItem("matches",JSON.stringify(T))
  //   localStorage.setItem("matchId",matchId+1);
  //  this.router.navigate(["admin"])

  //   console.log("Med",para);
    

  // }

  validateForm(){
    //edit match
    if (this.id) {
      this.matchService.editMatch(this.findMatch).subscribe(
        ()=>{
          this.router.navigate(["admin"]);
        }
      )
      
    }else{
      //add match
      this.matchService.addMatch(this.addMatchForm.value).subscribe(
        (response)=>{
          console.log("here response",response.message);
          
          this.router.navigate(["admin"]);
        }
      )
    }
   
    
  }

}
