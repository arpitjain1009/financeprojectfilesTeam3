import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Customer } from 'src/models/customer';
import { Variable } from '@angular/compiler/src/render3/r3_ast';



@Injectable()
export class Custservice{
   customer;
   custcard;
    constructor(private http:HttpClient){
    }

    public login(un:string,pswd:string){
       return this.http.get("https://localhost:44301/api/login?uname="+un+"&password="+pswd);
    }
    public carddetails (cid){
        return this.http.get("https://localhost:44301/api/login?id=1&cust_id="+cid.toString() )
    }
    

}   