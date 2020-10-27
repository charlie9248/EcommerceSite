import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import {ProductService} from './services/product.service'






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

Productimage;



	constructor(private product : ProductService ){}
	


  ngOnInit(){

  }

//https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/

}
