import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router}  from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth : AuthService , private router : Router ,private location: Location) { }

  ngOnInit(): void {
     
  }
  
  logout(){
    this.auth.deleteToken();
  }
}
