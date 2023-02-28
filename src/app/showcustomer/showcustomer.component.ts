import { Component } from '@angular/core';
import{RegistrationService}from'../../app/registration.service';
import { hashSync,compareSync } from 'bcryptjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent { 
  constructor(private api:RegistrationService
  ,private router:Router){}
registerForm:any;
customers:any;
data:any;
customers_data:any;
a:any;
ngOnInit():void{
  this.api.apiCall().subscribe((data)=>{
    this.customers = data;
  })
}
editUser(id:number,data:any){
  this.api.editUser(id,data).subscribe((data: any) => {
    this.customers_data= data;
/*     console.log(this.user_data.customer); */
   /*  this.registerForm.patchValue({
      firstname:this.user_data.customer.firstname,
      lastname:this.user_data.customer.lastname,
      email:this.user_data.customer.email,
    }) */
  });
  this.router.navigate(['showcustomers/edit',id])
}
deleteUser(id: number) {
  if (confirm("Are you sure you want to delete this user?")) {
    this.api.deleteUser(id).subscribe((data:any) => {
    });
  }
}
}
