import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  user:any={};
  errorMsg!:string
  constructor(private userService:UserService,
    private router:Router ) { }

  ngOnInit(): void {

  }
  login(){
   this.userService.login(this.user).subscribe(
    (data)=>{
      console.log("Here data from BE",data)
      if (data.message=="Error") {
        this.errorMsg="Please chech email/pwd"
      } else {
        if (data.user.role=="admin") {
          this.router.navigate(["admin"]);
        } else {
          this.router.navigate(["home"]);
          
        }
        
      }
    }
   )
    

  }
}
