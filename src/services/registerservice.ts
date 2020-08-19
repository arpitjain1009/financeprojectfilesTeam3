import {Register} from '../models/register';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { DocDetail } from '../models/docDetail';

@Injectable()
export class RegisterService{
    registers:Register[];
    registerusername;
    registeruserid:number;
    registerusedcardtype;

    
    constructor(private http:HttpClient){
        this.registers=[];
    }
   
    public postuser(register:Register){
       return this.http.post("https://localhost:44326/api/Registration",register);
    }
    
}