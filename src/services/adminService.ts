import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { CustomerPurchasal } from 'src/models/customerpurchasal';
import { CardDetail } from 'src/models/cardDetail';

@Injectable()


export class AdminService{

    constructor(private http:HttpClient){

    }

    public AdminLogin(uname,pswd){
        return this.http.get("https://localhost:44326/api/AdminLogin/?uname="+uname+"&pswd="+pswd)
    }

    public getAllCustdata (){
        return this.http.get("https://localhost:44326/api/AdminCustomerMasters");
    }

    public specificCustData(id){
        return this.http.get("https://localhost:44326/api/AdminCustomerMasters/"+id);
    }
    public EditCustData (id ,c:any){
        return this.http.put("https://localhost:44326/api/AdminCustomerMasters/"+id,c)
    }


    public specificCustCard(id){
        return this.http.get("https://localhost:44326/api/AdminCardDetails/"+id);
    }

    //c>> is dummy data (Not used in APt for sake of SYntax)
    public ChangeCardStatus (id,carnum,c:CustomerPurchasal){
        return this.http.put("https://localhost:44326/api/AdminCardDetails/5?id="+id+"&cardnum="+carnum+"",c )
    }

    public AddNewCardDetails (cardnumber:number, cvv:number, custid:number, name:string, expiraydate:Date, cardtype:number, bal:number,  c:CardDetail)
    {
       return this.http.post("https://localhost:44326/api/Admincarddetails?cardnum="+cardnumber+"&cvv="+cvv+"&custid="+custid+"&name="+name+"&Expiraydate="+expiraydate+"&cardtype="+cardtype+"&bal="+bal+"&status=0",c);
    }

}