import { Component, OnInit , ViewChild  } from '@angular/core';
import { Product } from 'src/model/product';
import {ProductService} from '../../services/product.service';
import {AuthService} from '../../services/auth.service';

import {NgForm} from  '@angular/forms';

@Component({
  selector: 'app-postproduct',
  templateUrl: './postproduct.component.html',
  styleUrls: ['./postproduct.component.css']
})
export class PostproductComponent implements OnInit {

  Productimage;
  ProductName : String = "";
  ProductType : String = "";
  ProductPrice : String = "";
  ProductModel : String = "";
  ProductMake : String = "";
  url;
  msg = "";
  alert:boolean = false;

  
    constructor(private product : ProductService  , private auth : AuthService){}
    @ViewChild('Product') public clearForms : NgForm;
    selectFile(event) {
      if(!event.target.files[0] || event.target.files[0].length == 0) {
        this.msg = 'You must select an image';
        return;
      }
  
      var mimeType = event.target.files[0].type;
      
      if (mimeType.match(/image\/*/) == null) {
        this.msg = "Only images are supported";
        return;
      }
      
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.Productimage = event.target.files[0];
      reader.onload = (_event) => {
        this.msg = "";
        this.url = reader.result; 
      }
    }
  
  
    ngOnInit(){}
  
    Submit(product:Product){

    const {id} = this.auth.getUserDetails();
    console.log(id);
    const formaData =  new FormData();
    formaData.append('productimage' ,  this.Productimage);
    formaData.append('userId' ,  id);
    for ( var key in product ) {
    formaData.append(key, product[key]);
    console.log(product[key])
  }
  
    this.product.postProduct(formaData).subscribe(res =>{
      console.log(res)
      this.clearForms.resetForm();
    } , err=>{
      console.log(err)
    })
    }
}
