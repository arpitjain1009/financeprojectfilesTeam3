import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router'

import {HttpClientModule} from '@angular/common/http';
import {Custservice} from '../services/custservices'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

//Declared in app-Routing.module.ts  
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentgatewayComponent } from './shopping-cart/paymentgateway/paymentgateway.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';

import { DatePipe } from '@angular/common';

var myRoutes:Routes= [
  {path:"Login",component:LoginComponent,children:[
    {path:"dasboard",component:DashboardComponent}
  ]}
 
]

@NgModule({
  declarations: [
    AppComponent, 
    routingComponents,


    DashboardComponent,
    LoginComponent,
    Dashboard1Component,
    ShoppingCartComponent,
    PaymentgatewayComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [Custservice,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
