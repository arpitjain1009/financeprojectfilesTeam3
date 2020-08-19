import { Component, OnInit } from '@angular/core';
import { Custservice } from 'src/services/custservices';
import {Router} from '@angular/router'

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  cust;
  Username :string ;
  Ans1:string ;
  Ans2 : string ;
  Ans3 : string;

  constructor(private customerservice:Custservice, private routes:Router) { }

  ngOnInit(): void {
  }

  Next(){

  //  this.customerservice.loginreset(this.Username, this.Ans1, this.Ans2, this.Ans3).subscribe((data)=>{
  //    console.log(data); 
  //  })

  this.customerservice.loginreset(this.Username, this.Ans1 , this.Ans2 , this.Ans3);

   this.customerservice.loginreset(this.Username, this.Ans1 , this.Ans2 , this.Ans3).subscribe((data) =>{
    this.cust = data;

    console.log(this.cust[0].id);

    this.customerservice.forgetcustid = this.cust[0].id;
    
    if(this.cust == null){
      alert("invalid login");
      console.log("null")
    }  
    else{
   console.log(this.customerservice.forgetcustid)

    this.routes.navigate(['/reset']);
      
     alert("Click here to proceed");
    } 
  } )


}

}
