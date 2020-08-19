import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { PaymentgatewayComponent } from './shopping-cart/paymentgateway/paymentgateway.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {SecurityComponent} from 'src/app/security/security.component';
import {ResetComponent} from 'src/app/reset/reset.component';
import {GeneratecardnumberComponent} from 'src/app/generatecardnumber/generatecardnumber.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegistrationFeeComponent } from './registration-fee/registration-fee.component';
import {UploadDocComponent} from 'src/app/upload-doc/upload-doc.component';
import { UploadDoc } from 'src/models/uploadDoc';

const routes: Routes = [
  {path : '', redirectTo : '/productList', pathMatch : 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'productList', component:ProductListComponent},
  {path: 'payementGateway', component:PaymentgatewayComponent},
  {path: 'adminLogin', component:AdminloginComponent},
  {path: 'adminDashBoard', component:AdmindashboardComponent},
  {path: 'security', component:SecurityComponent},
  {path: 'reset', component:ResetComponent},
  {path: 'Generatecard', component:GeneratecardnumberComponent},
  {path: 'register', component:RegisterUserComponent},
  {path:'registrationfee', component:RegistrationFeeComponent},
  {path: 'uploadDoc', component:UploadDocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,ProductListComponent,PaymentgatewayComponent,
  AdminloginComponent,AdmindashboardComponent,RegisterUserComponent,RegistrationFeeComponent,UploadDocComponent]
