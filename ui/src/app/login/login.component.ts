import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api/services';
import { LoginForAccessTokenTokenPost$Params } from '../api/fn/operations/login-for-access-token-token-post';
import { BodyLoginForAccessTokenTokenPost } from '../api/models';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  loginForm!: FormGroup;
  user: User | null = null;
  
  constructor( private fb: FormBuilder, private apiService: ApiService){
    this.initialiseForm()
    apiService.rootUrl = "http://127.0.0.1:8000"
  }

  initialiseForm(){
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  submitInput() {
    console.log('logging in with:' + this.loginForm.value.username );
    

    const body: BodyLoginForAccessTokenTokenPost = {
      username:this.loginForm.value.username,
      password:this.loginForm.value.password
    }
    const params : LoginForAccessTokenTokenPost$Params = {body:body}

    this.apiService.loginForAccessTokenTokenPost(params).subscribe(
      data => {
        localStorage.setItem("access_token", data.access_token) //sus, not sure how consistent this is without a listener
      })

    this.getUser()

  }

  getUser(){
    let user: User | null = null;
    this.apiService.readUsersMeUsersMeGet().subscribe(data => {
      user = new User(data.name);
    })
    this.user = user;
    localStorage.setItem("user", this.user!.username)
  }
}
