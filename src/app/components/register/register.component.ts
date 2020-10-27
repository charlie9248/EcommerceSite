import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../../model/user';
import {NgForm} from  '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('User') public clearForms : NgForm;
  constructor(private auth: AuthService ) { }

  Email;
  Password;
  Repassword;
  message;
  alert:boolean = false;

  ngOnInit(): void {
  }

  Submit(user){
    console.log(user)
    this.auth.registerUser(user).subscribe(res =>{
      console.log(res.message);
        this.message = res.message;
        this.alert = true;
        this.clearForms.resetForm();
    }, err =>{
      console.log(err);
    })

    

    
  }



  colseAlert(){
    this.alert = false;
  }


}
