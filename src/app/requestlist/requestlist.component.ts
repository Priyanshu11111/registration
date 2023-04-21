import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.css']
})
export class RequestlistComponent {
  constructor(private request:RequestService,private router:Router){}
  requestlist:any;
  ngOnInit():void{
    this.request.requestlist().subscribe((data) =>{
      this.requestlist = data
    })
  }
showrequest(id:number){
  this.request.showrequest(id).subscribe((data:any) =>{
    this.request=data;
  })
  this.router.navigate(['users/showrequests',id], { skipLocationChange: true });
}
}