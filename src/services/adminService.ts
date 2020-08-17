import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { CustomerPurchasal } from 'src/models/customerpurchasal';

@Injectable()


export class AdminService{

    constructor(private http:HttpClient){

    }

    public AdminLogin(uname,pswd){
        return this.http.get("https://localhost:44301/api/AdminLogin/?uname="+uname+"&pswd="+pswd)
    }

    public getAllCustdata (){
        return this.http.get("https://localhost:44301/api/AdminCustomerMasters");
    }

    public specificCustData(id){
        return this.http.get("https://localhost:44301/api/AdminCustomerMasters/"+id);
    }
    public EditCustData (id ,c:any){
        return this.http.put("https://localhost:44301/api/AdminCustomerMasters/"+id,c)
    }


    public specificCustCard(id){
        return this.http.get("https://localhost:44301/api/AdminCardDetails/"+id);
    }

    //c>> is dummy data (Not used in APt for sake of SYntax)
    public ChangeCardStatus (id,carnum,c:CustomerPurchasal){
        return this.http.put("https://localhost:44301/api/AdminCardDetails/5?id="+id+"&cardnum="+carnum+"",c )
    }

}