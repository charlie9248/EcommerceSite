import { Component, OnInit , ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router}  from '@angular/router';
import {NgForm } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email;
  Password;
  Repassword;
  message;
  alert:boolean = false;

  constructor(private auth: AuthService , private router : Router ) { }
  @ViewChild('User') public clearForms : NgForm;
  ngOnInit(): void {
  }


  Submit(user){
    console.log(user)
    this.auth.loginUser(user).subscribe(res =>{
      console.log(res);
      this.auth.setToken(res['token'])
      this.router.navigate(['/display']);
      this.alert =  false;
    }, err =>{
      console.log(err);
      this.message = err.error.msg;
      console.log(this.message);
      this.alert =  true;
      this.clearForms.resetForm();
    })
  }

  colseAlert(){
    this.alert = false;
  }

}
