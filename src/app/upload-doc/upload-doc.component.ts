import { Component, OnInit } from '@angular/core';
import {UploadDoc} from 'src/models/uploadDoc';
import {DocDetail} from 'src/models/docDetail';
import {Register} from 'src/models/register';
import {RegisterService} from 'src/services/registerservice'
import {UploadDocService} from 'src/services/uploadDocservice';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.css']
})
export class UploadDocComponent implements OnInit {
// fileToUpload;
public doc:UploadDoc;
public register:Register;
uploadsuccess;
imageUrl:string="/assets/images/default.png";
uploadFile:File=null;
DocName:{};
CustomerName:"";
ddlDocName:"";
Username:string;

constructor(private http:HttpClient,private uploadser:UploadDocService,
  private registerser:RegisterService,private _route:Router,private route:ActivatedRoute ) {
  this.doc=new UploadDoc();
  this.GetDocumentList(); }
  
  ngOnInit(): void {
  }

fetchUser(un){
  this.uploadser.getuser(un).subscribe((data)=>{
   // alert(data[0]);
    this.doc.CustId=data[0].id;
    this.registerser.registeruserid=data[0].id;
    this.registerser.registerusername=data[0].UserName;
    console.log("this.registerser.registeruserid",this.registerser.registeruserid);
    console.log("this.registerser.registerusername",this.registerser.registerusername)
    console.log(data)
    console.log(this.doc.CustId)
  });
}

GetDocumentList(){
  this.http.get("https://localhost:44326/api/DocumentMasters").subscribe((data)=>{
    this.DocName=data
  });
}

handleFile(file:FileList){
  this.uploadFile=file.item(0);
  //show image preview
  var reader=new FileReader();
  reader.onload=(event:any)=>{
  this.imageUrl=event.target.result;
  }
  reader.readAsDataURL(this.uploadFile);

  }

OnSubmit(Cid,Did,Image){
  //alert('docId' + this.ddlDocName);
  this.uploadser.postDocs(this.doc.CustId,this.ddlDocName,this.uploadFile).subscribe((data)=>{
     this.uploadsuccess=data;
     
     console.log(data);
     (this._route).navigate(['/registrationfee']);
    })
  }
  // OnClickButton():void{
  //  
  //   this._route.navigate(['/registration-fee']);
  // }

}
