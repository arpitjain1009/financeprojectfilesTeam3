import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/models/customer';
import { Custservice } from 'src/services/custservices';
import {Router} from '@angular/router'

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  
  password :string;
  
  custid;
  cust1;
  c : Customer;

  id : number;
  constructor(private customerservice : Custservice , private routes : Router) { }

  ngOnInit(): void {
    console.log(this.customerservice.forgetcustid);
  }

  Next1(){
    //this.customerservice.custmaster1 = this.customerservice.reset(this.custid , this.password , this.c );
    console.log("data"+this.customerservice.forgetcustid)
    
    this.customerservice.reset(this.customerservice.forgetcustid , this.password , this.c ).subscribe(
      (data) =>{
      this.cust1 = data;

      if(this.cust1== null){
        alert("invalid input");
        console.log("null");
      }
      else{
        
        alert("password changed");
        this.routes.navigate(['/login']);

      }
    } )

  }

}
