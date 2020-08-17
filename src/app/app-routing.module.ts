import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { PaymentgatewayComponent } from './shopping-cart/paymentgateway/paymentgateway.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  {path : '', redirectTo : '/productList', pathMatch : 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'productList', component:ProductListComponent},
  {path: 'payementGateway', component:PaymentgatewayComponent},
  {path: 'adminLogin', component:AdminloginComponent},
  {path: 'adminDashBoard', component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,ProductListComponent,PaymentgatewayComponent,AdminloginComponent,AdmindashboardComponent]
