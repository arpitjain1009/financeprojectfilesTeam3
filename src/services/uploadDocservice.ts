import {UploadDoc} from '../models/uploadDoc';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DocDetail} from '../models/docDetail';
@Injectable()
export class UploadDocService{
    uploaddocs:UploadDoc[];
   
    constructor(private http:HttpClient){
        this.uploaddocs=[];
    }

    public getuser(un:string){
        return this.http.get("https://localhost:44326/api/Registration?username="+un);
    }

    public getcardtype(type:string){
        return this.http.get("https://localhost:44326/api/CardTypeMaster?cardtype="+type);
    }
    public postDocs(Cid:string,Did:string,UploadFile:File){
        const formdata:FormData=new FormData();
        formdata.append('Image',UploadFile,UploadFile.name);
        formdata.append('docId',Did);
        formdata.append('CustId',Cid)

        return this.http.post("https://localhost:44326/api/UploadImage",formdata);
    }
}