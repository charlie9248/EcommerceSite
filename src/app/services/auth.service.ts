import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../../model/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urll:string = "http://localhost:8080/user";

  constructor(private http : HttpClient , private router : Router) {}


  registerUser(user) : Observable<any>{
    return this.http.post<any>(`${this.urll}/register` , user);
  }


  loginUser(user) : Observable<User>{
    return this.http.post<User>(`${this.urll}/login` , user);
  }


  public getUserDetails(){
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }


  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }


  setToken(token){
    localStorage.setItem('token' , token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
