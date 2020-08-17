import { Component, OnInit } from '@angular/core';
import {AdminService} from 'src/services/adminService';
import {Customer} from 'src/models/customer';
import { tick } from '@angular/core/testing';
import {} from 'src/models/customer'
import { from } from 'rxjs';
import { CustomerPurchasal } from 'src/models/customerpurchasal';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  custData;
  specificCustdata;
  specificCustCardData;
  viewspecificCustdata:boolean =false;
  viewspecifcCustcard:boolean =false;
  statusmsg:string = "";

  id:number;
  FirstName:string;
  Middlename:string;

  updatecustomer:Customer

  constructor(private AdminService:AdminService) { 
     this.updatecustomer =  new Customer();
    this.viewspecificCustdata=false;
  }

  ngOnInit(): void {
this.AdminService.getAllCustdata().subscribe((data)=>{
  this.custData = data;
 
console.log(this.custData);

})

  }



  userdate(id){
    
    this.AdminService.specificCustData(id).subscribe((data)=>{
      this.viewspecifcCustcard = false;
      this.viewspecificCustdata = true;
      this.specificCustdata = data;
  // this.specificCustdata=    this.updatecustomer ;
      //this.specificCustdata = this.updatecustomer;
      console.log(this.specificCustdata)
      console.log("Update "+this.updatecustomer);
    })

  }

  usercarddata(id){
    this.AdminService.specificCustCard(id).subscribe((data)=>{
      this.viewspecificCustdata = false;
      this.viewspecifcCustcard = true;
      this.specificCustCardData = data;

      console.log(this.specificCustCardData);
      //console.log(data);
    })
  }

  Edit( ){
   // console.log(this.updatecustomer.id,this.updatecustomer.FirstName,this.updatecustomer.MiddleName);
    console.log("id"+this.specificCustdata.id)
    console.log(this.specificCustdata);

    this.AdminService.EditCustData(this.specificCustdata.id,this.specificCustdata).subscribe((data)=>{
      console.log("Data Updated")
    })

  }
  changecardstatus(status,cardnumb,c:CustomerPurchasal)
  {
    console.log("status"+status);
    console.log("cardnumber"+cardnumb);
    this.AdminService.ChangeCardStatus(status,cardnumb,c).subscribe((data)=>{
      console.log("status Changed"+data);
    })
    this.statusmsg = "Status chanaged";
    this.viewspecifcCustcard = false;

  }

}


