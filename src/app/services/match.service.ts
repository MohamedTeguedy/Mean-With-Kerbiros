import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  
  matchURL:string="http://localhost:3000/matches";
  constructor(private httpClient:HttpClient) { }

  
  addMatch(obj:any){
   return this.httpClient.post<{message:String}>(this.matchURL,obj)
  }


  getMatch(){
    return this.httpClient.get<{matchesTab:any}>(this.matchURL)
  }


  editMatch(obj:any){
    return this.httpClient.put<{message:string}>(`${this.matchURL}/${obj._id}`,obj)
  }


  deleteMatch(id:any){
    return this.httpClient.delete<{message:string}>(`${this.matchURL}/${id}`)

  }


  getMatchById(id:any){
    return this.httpClient.get<{match:any}>(`${this.matchURL}/${id}`)
  //  return this.httpClient.get(this.matchURL+"/"+id)

  }

  searchMatchesByScore(obj:any) {
    return this.httpClient.post<{ matches: any }>(this.matchURL + "/searchByScore", obj);
  }

}
