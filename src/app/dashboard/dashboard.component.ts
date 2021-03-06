import { Component, OnInit, Input } from '@angular/core';
import { Custservice } from 'src/services/custservices';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 custdata;
 card;
 ExpiryDate:Date;
cust:Variable;
 Name;

  constructor(private customerService:Custservice, private datepipe :DatePipe) { 
   
  }

  ngOnInit(): void {
    this.cust = this.customerService.customer;
    this.fetch();
    //this.ViewProducts();
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
    console.log(data1);
  console.log(this.card)
    this.Name = data1[0].Name;
    console.log("ExpirayDate"+this.ExpiryDate);
  }))
  }
  ViewProducts(){
   var element;
    this.customerService.products =this.customerService.getProducts();
    console.log(this.customerService.products);

    this.customerService.products.subscribe((data=>{
     console.log(data)
     element = data.Where((d) =>d.id = 1 )
     console.log(element)
    }))

  }
}
