import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/model/cart';
import {CartService} from '../../services/cart.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  carts : Cart[];
  total = [];
  getTotal ;
  userinfo;
  userId;

  constructor(private http : CartService , private authhttp :AuthService)   { }
 
  ngOnInit(): void {
    this.getAllCart();
  }

  deleteCart(cart){
    this.http.deleteCart(cart._id).subscribe(res=>{
      this.getAllCart();
    },
      err=>{
        console.log('failure');
      });
  }


  getAllCart(){
    //const {_id} =this.getUserDetails();
//this.userId = _id;
//console.log(this.userId);

    this.http.getAllCarts().subscribe(res=>{
      this.carts = res
      console.log(this.carts);
      this.total = this.carts.map(total => total.price);
      console.log(this.total);
      this.getTotal = this.total.reduce((a ,b) => {
       return a + b
      },0)

      console.log(this.getTotal);

    }, err=>{
      console.log(err)
    })
  }


  getUserDetails(){
    this.userinfo = this.authhttp.getUserDetails();
    return this.userinfo;
  }
}
