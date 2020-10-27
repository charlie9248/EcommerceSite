import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product}  from '../../model/product';



const httpOption = {
  header : new HttpHeaders({

  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  urll:string = "http://localhost:8080/product"
  formData =  new FormData();
  constructor(private http : HttpClient) { }


  getAllproducts ():Observable<Product[]> {
    return this.http.get<Product[]>(this.urll);
  }


  getUserPostProducts() :Observable<Product[]>{
    return this.http.get<Product[]>(`${this.urll}/getUserProducts`)
  }


  getproduct (id):Observable<Product> {
    return this.http.get<Product>(`${this.urll}/${id}`);
  }


  postProduct(formData) :Observable<Product>{
     return this.http.post<Product>(this.urll ,formData);
  }

  updateProduct(){

  }

  deleteProduct(id):Observable<Product>{
    return this.http.delete<Product>(`${this.urll}/${id}`);
  }

}
