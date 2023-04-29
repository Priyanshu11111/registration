import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import{TypesService}from'../../app/types.service';
import { Router,ActivatedRoute} from '@angular/router';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent {
typesForm:any;
types_data:any;
constructor(private api:TypesService
  ,public router:ActivatedRoute){}
ngOnInit() {
  this.typesForm=new FormGroup({
    "name":new FormControl(null,[Validators.required]),
    "comment":new FormControl(null,[Validators.required]),
  });
  this.router.params.subscribe((params)=>{
    this.edittype(params["id"],[])
})
}
hasWritePermission(moduleName: string):boolean{
  const permissionsStr = localStorage.getItem('permissions');
  if (permissionsStr) {
    const permissions = JSON.parse(permissionsStr);
    const hasReadPermission = permissions.some((permission: any) => permission.module === moduleName && permission.write);
    return hasReadPermission;
  }
  return false;
}
createTypes(){
  const formData = {
    ...this.typesForm.value,
  }
  const id = this.types_data ? this.types_data.types.id : null;
  if(id){
    this.api.updatetype(id, formData).subscribe((data:any) => {
    });
    alert(`User with ID ${id} has been updated`);
    this.typesForm.reset();
  }else{
    this.api.createTypes(formData).subscribe((response) => {
      if(this.typesForm.valid){
        alert(`Thank You ${this.typesForm.value.name}`);
      }
      this.typesForm.reset();
    }, (error) => {
      console.log('Types Not Created', error);
    });
  }
  }
edittype(id:any,data:any){
  this.api.edittype(id,data).subscribe((data:any) =>{
    this.types_data = data;
    this.typesForm.patchValue({
      name:this.types_data.types.name,
      comment:this.types_data.types.comment
    })
  })
}
get Name(){  
  return this.typesForm.get('name');
}
get Comment(){  
  return this.typesForm.get('comment');
}
}
