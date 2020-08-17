import { Component, OnInit } from '@angular/core';
import {Product} from 'src/models/product'
import { Custservice } from 'src/services/custservices';
import {CustomerPurchasal} from 'src/models/customerpurchasal'
import {PayementSchedule} from 'src/models/payementschedule'
import {PayementPlan} from 'src/models/payplan'
import { THIS_EXPR, variable } from '@angular/compiler/src/output/output_ast';
import { CONTENT_ATTR } from '@angular/compiler';
import { DatePipe } from '@angular/common';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import {Router} from '@angular/router';

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
  paysche:PayementSchedule;
  paysh:PayementSchedule[];

  d:number;

  list:Date[];

  plans;
  date;
  date1;
  newdate;
  payplan;

  Duration:number;
  processingfee;
  netAmount:number=0;
  availBalence:number =0;

  emiDuration;

  purchasalid:any;

  

  constructor(private customerService:Custservice, private datepipe :DatePipe, private routes:Router ) {
    this.paysh = [];
    this.list = [];
  

    this.purchasal = new CustomerPurchasal();
    
    // this.date = new Date();
    //       console.log(this.date);
    //       this.date.setDate(this.date.getDate()+3);
    //       console.log(this.date);
  
   }

  ngOnInit(): void {
    this.showitems();
  
  }

  showitems() {
    this.read = true;
    
   

    

    if(this.customerService.custcard==undefined){
      alert("Please Log in Process the payement")
      this.routes.navigate(['/login']);
    }
    else{
      console.log(this.purchasal);
      this.itemselect= this.customerService.item;
      this.customerService.custcard.subscribe((data1=>{
        //console.log(data1);
        this.carddata = data1
       
        //console.log(this.carddata);
        console.log(this.carddata);
        if(this.carddata[0].CardTypeMaster.Type == "Platinum")
          {
             this.processingfee = (5/100)*(this.itemselect.UnitPrice);
          }
        else if (this.carddata[0].CardTypeMaster.Type == "Gold")
          {
             this.processingfee = (10/100)*(this.itemselect.UnitPrice);
          }
          this.netAmount = (this.processingfee  + (this.itemselect.UnitPrice)*1) ;
          this.availBalence = (this.carddata[0].balence -this.netAmount)



        this.customerService.payementplans().subscribe((data=>{
          console.log(data);
          this.plans = data;
          

      
        })) //subscribe close -- payementplans

      })) //subscrible close -- 
    }
  }

  paycheck(){
    if(this.carddata[0].balence >= this.netAmount){
      this.pay()
    }
    else{
      alert ("In Sufficient Balence. Cannot Proceed the payement")
    }
  }

  pay()
  {
   // console.log("payement plan"+this.payplan)
 
    this.date1 = new Date();
    this.purchasal.CardNumber = this.carddata[0].CardNmber;
    this.purchasal.PayementPlan = this.payplan;
    this.purchasal.ProcessingFee =this.processingfee ;
    this.purchasal.NetAmount = this.netAmount ;
    this.purchasal.ProductId = this.itemselect.id;
    this.purchasal.PurchaseDate = this.date1.toISOString().slice(0, 10).replace('-', '/').replace('-', '/'); //this.date1; //this.date1.toISOString().slice(0, 10);//.replace('T', ' ');
    this.purchasal.BillAmount = this.itemselect.UnitPrice;
    this.purchasal.DownPayement = null;
        
    console.log(this.purchasal);


    //ADDING PURCHASE DATA TO DB(WITH DATE) SUCEFFULLY USING STORED PROCEDURES
    this.addcustpurchasal(this.carddata[0].CardNmber,this.payplan,
    this.itemselect.id,this.itemselect.UnitPrice,this.processingfee,this.netAmount,0);
    this.customerService.fetchCustPurchasalId(this.purchasal.CardNumber).subscribe((data)=>{
      this.purchasalid = data[0].id;
      console.log(this.purchasalid);

    })

 
 


    for(let j =0; j<=this.plans.length;j++){
        if(this.plans[j].id== this.payplan){
          this.Duration = this.plans[j].Duration;
          console.log("Duration"+this.plans[j].Duration);
          break;
        }
        else{
          continue;
        }
    }

   // console.log(this.Duration);


    
   this.date = new Date();
  // console.log(this.date);

    for(let j=0;j<this.Duration;j++){
      this.date.setDate(this.date.getDate()+30);
      this.newdate = this.date.toISOString().slice(0, 19).replace('T', ' '); // Voverting into string and removing the time part
      this.newdate = this.datepipe.transform(this.newdate, 'yyyy-MM-dd') // setting the requred format
      this.postdate(this.newdate);
    }
  }
 
  postdate(d:Date){
    this.customerService.fetchCustPurchasalId(this.purchasal.CardNumber).subscribe((data)=>{
    
      console.log(data[0].id);
  
     this.paysche = new PayementSchedule();
     this.paysche.Purchasalid = data[0].id;
     this.paysche.payementdate = d;
     this.paysche.Amount = (Math.floor(this.netAmount / this.Duration));
     this.paysche.Paid = 0;
     this.addPayschedule(this.paysche.Purchasalid,d,this.paysche.Amount,this.paysche.Paid,this.paysche);
     console.log(this.paysche);
     this.paysche = null;
  })

  this.updateBalence();
    
  }

  //POST Function --- Adding to CustomerPurchasal (Using StoredProcedure)
  addcustpurchasal(cnum,pplan,prid,bilamt,pfee,namt,dwnpay)
  {
     this.customerService.addCustomerPurchasal(cnum,pplan,prid,bilamt,pfee,namt,dwnpay,this.purchasal).subscribe((data)=>{
       console.log("Added Purchasal"+data)
    })
  }

  addPayschedule(payid,paydate,amt,paid,p:PayementSchedule)
  {
     this.customerService.insertPaySchdule(payid,paydate,amt,paid,p).subscribe((data1)=>{
      console.log("Added schedule"+data1)
    });
    console.log("Schedule Added"+paydate);
  }

  updateBalence(){
    this.customerService.updatebalence(this.availBalence,this.carddata[0].CardNmber,this.paysche).subscribe((data2)=>{
      console.log("Balence Upadated"+data2);
    })
  }



}
