import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './components/display/display.component';
import { PostproductComponent } from './components/postproduct/postproduct.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {MatIconModule} from '@angular/material/icon';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AuthGuard} from './guard/auth.guard';
import {AuthInterceptor} from './guard/auth.interceptor';
import { ErrorComponent } from './components/error/error.component';
import { ViewPostComponent } from './components/view-post/view-post.component';








@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    PostproductComponent,
    HeaderComponent,
    DisplayProductComponent,
    ProductDetailsComponent,
    CartPageComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    ViewPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],

    /*
     */

  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
