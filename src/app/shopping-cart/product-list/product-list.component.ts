import { Component, OnInit } from '@angular/core';
import { Custservice } from 'src/services/custservices';
import{Product} from 'src/models/product';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  prods

  constructor(private customerServive:Custservice, private routes:Router) { 

  
  }

  ngOnInit(): void {
    
    this.View();
   
  }
  View(){

    this.customerServive.products =this.customerServive.getProducts();
    console.log(this.customerServive.products);
    this.customerServive.products.subscribe((data=>{
      this.prods=data;
      console.log(data)
     }))

     console.log(this.prods) 
    }
    buy(item:Product){
      console.log(item);
      this.customerServive.item = item;
      console.log(this.customerServive.item);

      //Routing
      this.routes.navigate(['/payementGateway']);


    }





    
  

}
