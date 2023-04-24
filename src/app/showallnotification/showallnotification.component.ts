import { Component,ChangeDetectorRef } from '@angular/core';
import {  RequestService } from '../request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showallnotification',
  templateUrl: './showallnotification.component.html',
  styleUrls: ['./showallnotification.component.css']
})
export class ShowallnotificationComponent {
request:any;
accept:any;
reject:any;
showrequests:any;
constructor(private requests:RequestService ,private router:Router,private cdRef: ChangeDetectorRef){}
ngOnInit():void{
  this.requests.getrequest().subscribe((data)=>{
    this.request= data;   
    console.log(this.request);
   })
}
Accept(id:number,data:any){
  if (confirm("Are you sure you want to Accept this Request?")){  
  data.status = '1'; 
  this.requests.status(id,data).subscribe((data)=>{
    if (Notification.permission === 'granted') {
      new Notification('You accepted request successfully!', {
        icon: '/assets/icons/check.png',
        body: 'Your request has accept successfully.'
      });
    } 
    this.accept=data
  })}
}
Reject(id:number,data:any){
  if (confirm("Are you sure you want to Reject this Request ?")){
    data.status = '-1';
    this.requests.status(id,data).subscribe((data)=>{
      this.reject=data
    })
  }
}
show(id:number){
  this.requests.showrequest(id).subscribe((data:any) =>{
    this.request=data;
  })
  this.router.navigate(['admin/showrequests',id],{ skipLocationChange: true })
}
}
