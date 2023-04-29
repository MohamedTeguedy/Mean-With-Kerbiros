import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL:string="http://localhost:3000/players"

  constructor(private httpclient:HttpClient) { }


  addPlayer(obj:any){
    return this.httpclient.post<{success:boolean}>(this.playerURL,obj)
   
  }


  getAllPlayer(){
    return this.httpclient.get<{playersTab:any}>(this.playerURL)
  }


  getPlayerByName(Nom:any){
    return this.httpclient.get(`${this.playerURL}/${Nom}`)
  }


  editPlayer(obj:any){
    return this.httpclient.put(`${this.playerURL}/${obj.id}`,obj)
  }


  deletePlayer(x:any){
    return this.httpclient.delete(`${this.playerURL}/${x}`)
  }


}
