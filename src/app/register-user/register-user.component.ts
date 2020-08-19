import { Component, OnInit } from '@angular/core';
import {Register} from 'src/models/register';
import {RegisterService} from 'src/services/registerservice';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
public register:Register;
result;
user;
  constructor(private registerser:RegisterService,private _route:Router) {this.register=new Register(); }

  ngOnInit(): void {
  }
  AddUser(){
    console.log("test");
    console.log(this.register);
     this.registerser.postuser(this.register).subscribe((data)=>{
       this.result=data;
       console.log(data);
      this._route.navigate(['/uploadDoc']);
     })
  }

  // OnBackButton():void{
  //   this._route.navigate(['/upload-img']);
  // }
  

}
