import { Component, OnInit } from '@angular/core';
import { Custservice } from 'src/services/custservices';
import { tick } from '@angular/core/testing';
import { RegisterService } from 'src/services/registerservice';
import {CardDetail} from 'src/models/cardDetail';
import { DatePipe } from '@angular/common';
import { AdminService } from 'src/services/adminService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-generatecardnumber',
  templateUrl: './generatecardnumber.component.html',
  styleUrls: ['./generatecardnumber.component.css']
})
export class GeneratecardnumberComponent implements OnInit {

 balence:number
  cardnumber:number;
  cvvnumber:number;
  date:Date;
  newdate;

  dummy:CardDetail;

  cardtypeval:number;

  cardnumberAccepted:boolean = false;

  username:string;
  userid:number;
  cardtype;

  uploadcard:CardDetail;


  constructor(private adminservice:AdminService,private routes:Router ,private CustomerService:Custservice, private registerservice:RegisterService , private datepipe :DatePipe, ) { 

    this.uploadcard = new CardDetail();
   
   // this.cardnumber = this.RandomNumber(111111111111,999999999999);
    this.cvvnumber = Math.floor(Math.random()*(999-111)+111);
    this.cardnumber = Math.floor(Math.random()*(9999-1111+1)+1111);
    console.log(this.cardnumber);
    this.validatecardnumber(this.cardnumber);
    this.generateexpirydate();
    }

  ngOnInit(): void {
  }

  generateexpirydate(){
    this.date = new Date();
    for(let i=0;i<5; i++){
      this.date.setDate(this.date.getDate()+365);
      this.newdate = this.date.toISOString().slice(0, 19).replace('T', ' ');
      this.newdate = this.datepipe.transform(this.newdate, 'yyyy-MM-dd');
    }
    console.log(this.date);
 


  }

  validatecardnumber(cardnumber){
    this.CustomerService.FetchallCardsData().subscribe((data)=>{
       for(let i in data){
         if(data[i].CardNmber == cardnumber ){
           console.log(data); 
           console.log(cardnumber+"Exsists")
           this.cardnumberAccepted =false;
           break;
         }
         else{
         this.cardnumberAccepted = true;

         }
       }
       if(this.cardnumberAccepted){
       this.generateexpirydate();
       this.userid = this.registerservice.registeruserid;
       this.username = this.registerservice.registerusername;
       this.cardtype = this.registerservice.registerusedcardtype;

       console.log("this.registerservice.registeruserid"+this.registerservice.registeruserid);
       console.log("this.registerservice.registerusername"+this.registerservice.registerusername);
       console.log(" this.registerservice.registerusedcardtype"+ this.registerservice.registerusedcardtype)

      this.uploadcard.CustId = this.userid;
       this.uploadcard.CardNmber = this.cardnumber;
       this.uploadcard.cvv = this.cvvnumber;
       this.uploadcard.Name =  this.username.toString();
       
        if(this.cardtype == "Platinum"){
          this.cardtypeval = 1;
          this.balence = 300000;
        }else if(this.cardtype == "Gold"){
          this.cardtypeval = 2;
          this.balence = 100000;
        }

       this.uploadcard.Status = 0;
       this.uploadcard.ExpiraDate = this.newdate;
        console.log(cardnumber,"Valid");
        console.log("Out of loop", this.newdate);
        console.log( this.newdate.toString());
        console.log("Balence",this.balence);
 
        console.log("custid", this.uploadcard.CustId);
        console.log( this.cardnumber);
       console.log("cvv",this.uploadcard.cvv);
       console.log(this.registerservice.registerusername.toString());
       console.log("cardtype", this.cardtypeval);
       console.log("Balence",this.balence);
       console.log("status",this.uploadcard.Status);

       this.adminservice.AddNewCardDetails(this.cardnumber,this.cvvnumber,this.registerservice.registeruserid,this.registerservice.registerusername,
        this.newdate,this.cardtypeval,this.balence,this.dummy).subscribe((data)=>{
        console.log("Card Added"+data);
        
      })
       

      

       }
      
     })

  }

  //  getRandomNumberBetween(min,max)
  //  {
  //   return Math.floor(Math.random()*(max-min+1)+min);
  //   }

}
