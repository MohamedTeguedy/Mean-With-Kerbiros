import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string="http://localhost:3000/users"
  constructor(private httpclient:HttpClient) { }
 
  singup(userObj:any,img:File){
    let formdata= new FormData
    formdata.append("firstName",userObj.firstName);
    formdata.append("lastName",userObj.lastName);
    formdata.append("Email",userObj.Email);
    formdata.append("Password",userObj.Password);
    formdata.append("confirmPassword",userObj.confirmPassword);
    formdata.append("img",img);


   return this.httpclient.post<{message:string}>(this.userURL+"/sing-up",formdata)
  }

  login(user:any){
    return this.httpclient.post<{message:string,user:any}>(this.userURL+"/login",user);
  }



}
