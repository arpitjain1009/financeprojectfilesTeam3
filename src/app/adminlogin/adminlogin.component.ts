import { Component, OnInit } from '@angular/core';
import {AdminService} from 'src/services/adminService'
import {Router} from '@angular/router'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  Username:string = "adminkrishna";
  Password:string="admin1234";
  msg:String = ""
  admin;
  login:boolean = false;


  constructor(private adminService:AdminService, private routes:Router) { }

  ngOnInit(): void {
    
  }

  Login(){
    this.adminService.AdminLogin(this.Username,this.Password).subscribe((data)=>{
      console.log(data);
      this.admin= data ;
     
   })

   //console.log(this.admin.toString().length);
   
    this.routes.navigate(['/adminDashBoard']);

    
    
  }
  }
 

