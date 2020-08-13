import { Component, OnInit } from '@angular/core';
import { Custservice } from 'src/services/custservices';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  custdata;
  card;
  cust:Variable;

  constructor(private customerService:Custservice) { 
    
  }

  ngOnInit(): void {
    this.cust = this.customerService.customer;
  }

  
  fetch(){
    console.log("Dashboard ")
 
    
  console.log(this.customerService.customer);
  console.log(this.customerService.custcard);

  this.customerService.customer.subscribe((data=>{
   this.cust = data ; // customerMaster
  console.log(this.cust);
  }))

  this.customerService.custcard.subscribe((data1=>{
  this.card=   data1; //Carddetails with customerMaster, CardTypeMaster,CardDetails
    console.log(this.card)
  }))

  }

}
