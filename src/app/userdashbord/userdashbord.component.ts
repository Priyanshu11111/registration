import { Component } from '@angular/core';
import{RegistrationService}from'../../app/registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdashbord',
  templateUrl: './userdashbord.component.html',
  styleUrls: ['./userdashbord.component.css']
})
export class UserdashbordComponent {
  constructor(private api:RegistrationService
    ,private router:Router){}
    customers:any;
    a:any;
  ngOnInit():void{
    this.api.apiCall().subscribe((data)=>{
      this.customers= data;
    })
  }
}
