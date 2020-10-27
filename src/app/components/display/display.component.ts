import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private http : ProductService , private router : Router) { }

  products;

  ngOnInit(): void {
   
    this.http.getAllproducts().subscribe(res => {
      this.products = res
      console.log(this.products)
    
    }, err=>{
      console.log(err)
    })
    console.log(this.products)
  }

}
