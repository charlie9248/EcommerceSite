import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { tap } from 'rxjs/Operators';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router : Router , private authservice: AuthService ) {}


  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if(request.headers.get('noauth'))
    return next.handle(request.clone())

    else{
      const coloneReq = request.clone({
         headers : request.headers.set("Authorization" , "Bearer " + this.authservice.getToken())
      })
      return next.handle(coloneReq).pipe(tap(event=>{

      } , err=>{

        if(err){
          this.router.navigateByUrl('/login');
        }

      }));
    }
 

  }
}
