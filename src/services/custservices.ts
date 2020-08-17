import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Customer } from 'src/models/customer';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Product } from 'src/models/product';
import { CustomerPurchasal } from 'src/models/customerpurchasal';
import { PayementSchedule } from 'src/models/payementschedule';



@Injectable()
export class Custservice{
   customer;// holds customer data post login
   custcard;// hold cust card data post login
   products; // Hols all the products from tables>> product list
   item:Product; // Product for purchasal.
    constructor(private http:HttpClient){
    }

    public login(un:string,pswd:string){
       return this.http.get("https://localhost:44301/api/login?uname="+un+"&password="+pswd);
    }
    public carddetails (cid){
        return this.http.get("https://localhost:44301/api/login?id=1&cust_id="+cid.toString() );
    }
    public getProducts(){
        return this.http.get("https://localhost:44301/api/ProductLists");
    }
    public payementplans(){
        return this.http.get("https://localhost:44301/api/PayementPlans");
    }
    public addCustomerPurchasal(cnum,pplan,prid,bilamt,pfee,namt,dwnpay,custpurchase:CustomerPurchasal){
       // return this.http.post("https://localhost:44301/api/CustomerPurchasals",custpurchase);
       return this.http.post("https://localhost:44301/api/CustomerPurchasals?cnum="+cnum+
       "&pplan="+pplan+"&prid="+prid+"&bilamt="+bilamt+"&pfee="+pfee+"&namt="+namt+"&dwnpay="+dwnpay+"",custpurchase) 
    }
    public insertPaySchdule(payid,paydate,amt,paid,ps:PayementSchedule){
      
       return this.http.post("https://localhost:44301/api/PayementSchedules?purId="+payid+
       "&paydate="+paydate+"&amt="+amt+"&paid="+paid+"",ps);

       //https://localhost:44301/api/PayementSchedules?purId=6&paydate=2020-08-15&amt=500&paid=0
       // return this.http.post("https://localhost:44301/api/PayementSchedules",ps);
    }

    public  fetchCustPurchasalId (id)
    {
        return this.http.get("https://localhost:44301/api/CustomerPurchasals/1?id="+id);
    }
     public updatebalence(setbal:number, cardnum:number, ps:PayementSchedule){
         return this.http.put("https://localhost:44301/api/updateBalance/?setbal="+setbal+"&cardnum="+cardnum,ps)
     }


    

}   