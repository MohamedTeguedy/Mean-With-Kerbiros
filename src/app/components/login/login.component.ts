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
  login() {
  const username = this.form.username;
  const password = this.form.password;

  this.http.post('/login', { username: username, password: password })
    .subscribe((response: any) => {
      const token = response.token;
      localStorage.setItem('token', token);
    });
}

    }
   )
    

  }
}
