import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './components/display/display.component';
import { PostproductComponent } from './components/postproduct/postproduct.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'display', component: DisplayComponent , canActivate:[AuthGuard] },
  { path: 'post', component: PostproductComponent , canActivate:[AuthGuard] },
  { path: 'carts', component: CartPageComponent , canActivate:[AuthGuard]},
  { path: 'view', component: ViewPostComponent , canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details/:id', component: ProductDetailsComponent , canActivate:[AuthGuard] },
  { path: '**', component: ErrorComponent  , canActivate:[AuthGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
