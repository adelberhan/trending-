import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  messageError: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });



  ngOnInit(): void {
  }

  postLogin(LoginForm: FormGroup) {
    this._AuthService.postLoginForm(LoginForm.value).subscribe((data) => {
      console.log(data);

      if (data.message == 'success') {

        localStorage.setItem('userToken', data.token);
        this._Router.navigate(['/home'],);
        this._AuthService.saveCurrentUser();
        
      }
      else {
        this.messageError = data.message;
      }
    })
  }

}
