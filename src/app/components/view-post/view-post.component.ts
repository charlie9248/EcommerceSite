import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor(private productService : ProductService) { }

  products: Product[]
  public chepproducts ;

  ngOnInit(): void {
    this.getUserPorducts();
  }


  getUserPorducts(){
    this.productService.getUserPostProducts().subscribe(res =>{
      console.log(res);
      this.products = res;
      if(this.products.length == 0 ){
        this.chepproducts = true;
      }
    } ,err=>{
      console.log(err.message);
    })
  }

  deleteProduct(product){
    this.productService.deleteProduct(product._id).subscribe(res => {
      console.log(res);
      this.getUserPorducts()
    }, err =>{
      console.log(err);
    })
  }

}
