import { Component, OnInit } from '@angular/core';
import {Product} from 'src/models/product'
import { Custservice } from 'src/services/custservices';
import {CustomerPurchasal} from 'src/models/customerpurchasal'

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {

  itemselect;
  //custdata;
  carddata;
  read:boolean=false;
  purchasal:CustomerPurchasal;

  plans;
  date;
  newdate;
  payplan;
  processingfee;
  netAmount;

  

  constructor(private customerService:Custservice) {
    this.purchasal = new CustomerPurchasal();
  
   }

  ngOnInit(): void {
  
  }

  showitems() {
    this.read = true;
    if(this.customerService.custcard==undefined){
      alert("Please Log in Process the payement")
    }
    else{
      console.log(this.purchasal);
      this.itemselect= this.customerService.item;
      this.customerService.custcard.subscribe((data1=>{
        //console.log(data1);
        this.carddata = data1
       
        //console.log(this.carddata);

        this.customerService.payementplans().subscribe((data=>{
          console.log(data);
          this.plans = data;
          

          this.date = new Date();
          this.newdate = this.date+30;
          console.log(this.date);
          console.log(this.newdate);

          //Purchasals::
         
          

          console.log(this.processingfee);
          

        // console.log(this.date);
         
        })) //subscribe close -- payementplans

      })) //subscrible close -- 
    }

console.log(this.payplan)

  }

  pay(){
   // console.log("payement plan"+this.payplan)
    if(this.carddata[0].CardTypeMaster.Type == "Platinum"){
      this.processingfee = (5/100)*(this.itemselect.UnitPrice);
    }
    else if (this.carddata[0].CardTypeMaster.Type == "Gold"){
      this.processingfee = (10/100)*(this.itemselect.UnitPrice);
    }
   

    this.netAmount = ((5/100)*(this.itemselect.UnitPrice))  + (this.itemselect.UnitPrice)*1 ;



    this.purchasal.CardNumber = this.carddata[0].CardNmber;
    this.purchasal.PayementPlan = this.payplan;
    this.purchasal.ProcessingFee =this.processingfee ;
    this.purchasal.NetAmount = this.netAmount ;
    this.purchasal.ProductId = this.itemselect.id;
    this.purchasal.PurchaseDate = null;
    this.purchasal.BillAmount = this.itemselect.UnitPrice;
    this.purchasal.DownPayement = null;
        
    console.log(this.purchasal);
    console.log(this.processingfee);
    console.log(this.carddata[0].Type)

  }

}
