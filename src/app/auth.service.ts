import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


constructor(private _httpClient: HttpClient,private _Router:Router) {
  if(localStorage.getItem('userToken')!=null)
  {
    this.saveCurrentUser();
  }
 }
  currantUser = new BehaviorSubject(null);


  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currantUser.next(jwtDecode(token));
    console.log(this.currantUser)

  
  }

  postRegieterForm(registerForm: any): Observable<any> {
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signup', registerForm);
  }

  postLoginForm(loginForm: any): Observable<any> {
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signin', loginForm);
  }
  logout(){
this.currantUser.next(null);
   localStorage.removeItem('userToken')
    this._Router.navigate(['/login'],);
 
};
}
