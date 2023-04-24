import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import{RegistrationService}from'../../app/registration.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent {
permissionForm:any
roles:any;
constructor(private api:RegistrationService
  ){}
ngOnInit() {
  this.api.getRoles().subscribe((data:any) => {
    this.roles = data
  })
  this.permissionForm = new FormGroup({
    'name': new FormControl(),
    'read': new FormControl(),
    'write': new FormControl(),
    'disabled': new FormControl()
  });
}
submitData(){
console.log(this.permissionForm.value);
}

}

