import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';
import { Product } from "../../../model/product";
import {Router} from '@angular/router'
import {AuthService} from '../../services/auth.service'
import {Location} from "@angular/common"


@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})


export class DisplayProductComponent implements OnInit {

  @Input() product;
 
  
  constructor(private router : Router , private auth : AuthService , private location: Location) {
   }

  ngOnInit(): void {
  }

  refresh(){

  }


  productSelected(product){
    this.router.navigate(['/details' , product._id])
  }

}
