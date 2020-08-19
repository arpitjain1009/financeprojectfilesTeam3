import { Component, OnInit } from '@angular/core';
import { Custservice } from 'src/services/custservices';


import {Router} from '@angular/router'
import {Customer} from 'src/models/customer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username:string ;
  Password:string;
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
    console.log(this.Username+ this.Password);
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

        //Routing
        this.routes.navigate(['/dashboard']);
      } 
    }))
  }
}