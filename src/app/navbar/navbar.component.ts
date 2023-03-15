import { Component, EventEmitter, Output } from '@angular/core';
import{RegistrationService}from'../../app/registration.service';
import { ActivatedRoute, Router } from'@angular/router';
import{FormGroup,FormControl,Validators}from'@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private api:RegistrationService,private Router:Router){}
  logout():void {
    this.api.logout();
}
assetForm:any;
currentUser: any;
currentRole: string = '';
asset:any;
customerName: string='';
ngOnInit():void{
    this.api.assetCall().subscribe((data)=>{
      this.asset = data;
    })
    this.assetForm=new FormGroup({
      "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "product-name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "image":new FormControl(null,[Validators.required]),
    });
}

submitAsset(){
  const formData = {
    ...this.assetForm.value, 
  }
  this.api.submitAsset(formData).subscribe(data => {
    console.log(data);
  });
}
get Name(){  
  return this.assetForm.get('name');
}
get ProductName(){
  return this.assetForm.get('product-name');
}
get Image(){
  return this.assetForm.get('image');
}
getUserRole() {
  return localStorage.getItem('userRole');
}
/* switchRole() {
  this.api.setUserRole(this.currentRole === 'admin' ? 'user' : 'admin');
  this.currentRole = this.api.getUserRole();
  this.router.navigate([this.currentRole === 'admin' ? 'admin' : 'users']);
} */
}
