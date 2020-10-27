import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart}  from '../../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  urll:string = "http://localhost:8080/cart"
  formData =  {}

  noAuthHeader = {headers : new HttpHeaders({"NoAuth" : "True"})}

  constructor(private http : HttpClient) { }



  //getAllCarts ():Observable<Cart[]> {
   // return this.http.get<Cart[]>(this.urll);
  //}


  getAllCarts ():Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.urll}`);
  }


  postCart(formData) :Observable<Cart>{
     return this.http.post<Cart>(this.urll ,formData  , this.noAuthHeader);
  }

  deleteCart(id) :Observable<Cart>{
    return this.http.delete<Cart>(`${this.urll}/${id}` , this.noAuthHeader);
 }

}
