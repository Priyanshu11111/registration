import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import{RegistrationService}from'../../app/registration.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
roleForm:any;
constructor(private api:RegistrationService
){}
ngOnInit() {
  /*   this.api.apiCall().subscribe((data)=>{
      this.roles= data;
    }) */
  /*   const currentRole = this.api.getUserRole();
    this.roles=currentRole; */
    this.roleForm = new FormGroup({
      'name': new FormControl(),
    });
  }
roleSubmit(){
  const formData = {
    ...this.roleForm.value, 
  }
  console.log(this.roleForm.value)
  this.api.createroles(formData).subscribe((data:any)=>{
    alert(`New Role has been created`);
  });
  this.roleForm.reset();
}
}

