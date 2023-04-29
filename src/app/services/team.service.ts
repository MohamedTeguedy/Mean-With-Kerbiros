import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL:string="http://localhost:3000/teams";

  constructor(private httpclient:HttpClient) { }
 //get all teams
 getTeam(){
  return this.httpclient.get<{teamTab:any}>(this.teamURL)
 }
 
 //add team
  addTeam(obj:any){
    return this.httpclient.post<{success:boolean}>(this.teamURL,obj);

  }
}
