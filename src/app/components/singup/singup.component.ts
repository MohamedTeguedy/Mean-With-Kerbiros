import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from '../share/functionpwd';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  singUp!: FormGroup;
  path!: string;
  imagePreview!:any
  http: any;
  form: any;
 


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.path=this.router.url
    this.singUp = this.formBuilder.group(
      {
        firstName: ['', [Validators.minLength(3), Validators.required]],
        lastName: ['', [Validators.minLength(3), Validators.required]],
        Email: [''],
        Password: ['', [Validators.minLength(3), Validators.required]],
        confirmPassword: ['', [Validators.minLength(3), Validators.required]],
        img:[""],
      },
      { validators: MustMatch('Password', 'confirmPassword') }
    );
  }


  
  sing() {
    let role;
    if (this.path=="/sing-up") {
      role="user";
      
    }else{
      role="admin";
    }
    // let T=JSON.parse(localStorage.getItem("users")||"[]")
    // let id=JSON.parse(localStorage.getItem("userId")||"1")
    // let user=para
    // user.id=id
    // T.push(user)
    // localStorage.setItem("users",JSON.stringify(T))
    // localStorage.setItem("userId",JSON.stringify(id + 1))
    this.singUp.value.role=role;
    this.userService.singup(this.singUp.value,this.singUp.value.img).subscribe((data) => {
      console.log('here data from BE', data.message);
    });
  }


  onImageSelected(event: Event){

    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.singUp.patchValue({ img: file });
    this.singUp.updateValueAndValidity();
    const reader = new FileReader();
    
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

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
