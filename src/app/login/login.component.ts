import { Component, OnInit } from '@angular/core';
import { Custservice } from 'src/services/custservices';


import {Router} from '@angular/router'
import {Customer} from 'src/models/customer';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username:string = "krishna";
  Password:string="1234";
  msg:String = ""

 // cust:Customer = null;
  cust;
  card;
  valuefound:boolean = false;

  constructor(private custservice:Custservice, private routes:Router) {
    
   
   }

  ngOnInit(): void {
  }
  Login(){
    this.custservice.customer = this.custservice.login(this.Username,this.Password);

    this.custservice.customer.subscribe((data=>{
      this.cust = data;
      if(this.cust== null){
        alert("invalid login")
        console.log("null")
      }
      else{
        console.log(this.custservice.customer);
        console.log(this.cust)
        console.log(this.cust.id)
        this.custservice.custcard = this.custservice.carddetails(this.cust.id);
        console.log(this.custservice.custcard);
        this.msg = "Loggedin"
      }
      
    }))

   

    

  // this.custservice.login.subscribe((data=>{
  //   this.custservice.customer =data;
  //   console.log(data);
  // }))




    // if(this.custservice.customer == null){
    //   alert("invalid Login")
    // }else{  
    //    this.custservice.carddetails(this.);
    //   console.log(this.custservice.customer);
    //   console.log(this.custservice.custcard)
    //   //this.routes.navigate(["/app/dashboard"])
    // }
  }



 

    // this.custservice.customer =  this.custservice.login(this.Username,this.Password).subscribe((data)=>{
    //   this.custservice.customer = data; // To use in any component
    //   if(this.custservice.customer==null){
    //     alert("Login Invalid");
    //   }else{
    //     this.cust= this.custservice.customer;
    //     // this.custservice.carddetails(this.cust.id).subscribe((data1)=>{
    //     //   this.card = data1;
    //     //  data1 = this.custservice.custcard;
    //     //   this.custservice.custcard = data1;
    //     // })
    //   }
    // })
}