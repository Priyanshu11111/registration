import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators,FormBuilder,FormArray}from'@angular/forms';
import{RegistrationService}from'../../app/registration.service';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent {
permissionForm:any
roles:any;
modules:any;
constructor(private api:RegistrationService
 ,private permis:PermissionService,private fb: FormBuilder ){}
permissions: any;

ngOnInit() {
  this.api.getRoles().subscribe((data:any) => {
    this.roles = data
  })
  this.permis.getmodules().subscribe((data:any) => {
    this.modules=data;
    console.log(data);
    for (let module of this.modules) {
      this.addFields();
    }
  })
  this.permissionForm = this.fb.group({
    name: ['', [Validators.required]],
    role: ['', Validators.required],
    module: this.fb.array([])
  });
  this.permissions = this.permissionForm.get('module') as FormArray;
  this.addFields();
}
addFields() {
  if (!this.modules || this.modules.length === 0) {
    return;
  }
  const newGroup = this.fb.group({
  module: [this.modules[this.permissions.length].name],
    read: ['', Validators.required],
    write: ['', Validators.required],
    disable: ['', Validators.required]
  });
  this.permissions.push(newGroup);
}

submitData(){
  const formData={
    ...this.permissionForm.value
  }
  formData.module.forEach((permission: any) => {
    permission.read = permission.read ? 1 : 0;
    permission.write = permission.write ? 1 : 0;
    permission.disable = permission.disable ? 1 : 0;
  });
  this.permis.createpermission(formData).subscribe((data:any)=>{
    alert('Permission Added')
  })
  console.log(this.permissionForm.value)
}

}

