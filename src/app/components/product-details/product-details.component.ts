import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product } from 'src/model/product';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product : Product;
  userinfo;
  userId;
  constructor(private activatedRoute : ActivatedRoute , private producthttp :ProductService , private carthttp :CartService , private authhttp :AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.getASingleProduct(params.get('id'))
    })

    this.getUserDetails();
  }


cartProduct(product){
const {id} =this.getUserDetails();
this.userId = id;
console.log(this.getUserDetails());


const productt = {
  product : product,
  userId : id
}

console.log(productt);
    this.carthttp.postCart(productt).subscribe(
      res=>{
        console.log(res);
        this.getUserDetails();
      }
    ,
    err=> console.log(err))
  }

  getUserDetails(){
    this.userinfo = this.authhttp.getUserDetails();
    return this.userinfo;
  }



  getASingleProduct(id){
    this.producthttp.getproduct(id).subscribe(response =>{
      this.product = response[0];
      console.log(this.product)
    },
    err=>{
      console.log(err.message)
    })
  }

}
