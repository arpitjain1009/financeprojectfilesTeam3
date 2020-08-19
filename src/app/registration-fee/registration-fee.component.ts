import { Component, OnInit } from '@angular/core';
import {Register} from 'src/models/register';
import {RegisterService} from 'src/services/registerservice';
import {Router} from '@angular/router';
import {CardDetail} from 'src/models/cardDetail';
import {UploadDocService} from 'src/services/uploadDocservice';
import {CardMaster} from 'src/models/cardmaster';
@Component({
  selector: 'app-registration-fee',
  templateUrl: './registration-fee.component.html',
  styleUrls: ['./registration-fee.component.css']
})


export class RegistrationFeeComponent implements OnInit {
  public card:CardDetail;
  public cardMaster:CardMaster;
  constructor(private registerservice:RegisterService, private uploadser:UploadDocService,private _route:Router) { 
    this.card=new CardDetail();
    this.cardMaster=new CardMaster();
  }

  ngOnInit(): void {
  }
  fetchCardType(type){
   this.uploadser.getcardtype(type).subscribe((data)=>{
  // this.card.cardtype=data[0].id;
  this.cardMaster.type=data[0].Type
  this.registerservice.registerusedcardtype = this.cardMaster.type;
  console.log(this.cardMaster.type);
    console.log(data);
    console.log(this.registerservice.registerusedcardtype);
   })
   

  }

}
