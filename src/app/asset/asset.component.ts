import { Component } from '@angular/core';
import{RegistrationService}from'../../app/registration.service';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import{ModelService}from'../../app/model.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent {
assetForm:any;
customers:any
model:any;
edit:any;
asset:any;
constructor(private api:RegistrationService,private Model:ModelService,public router:ActivatedRoute){}
ngOnInit():void{
  this.assetForm=new FormGroup({
    "name":new FormControl('', Validators.required),
    "model": new FormControl('',Validators.required),
    "ownername":new FormControl('',Validators.required),
    "status":new FormControl('',Validators.required),
  })
  this.router.params.subscribe((params)=>{
    this.editasset(params["id"],[])
})
  
  this.api.apiCall().subscribe((data)=>{
    this.customers= data;
  })
  this.Model.getmodels().subscribe((data)=>{
    this.model= data;
  }) 
}
editasset(id:number,data:any){
  this.Model.editasset(id,data).subscribe((data: any) => {
    this.edit = data;
    this.assetForm.patchValue({
      name:this.edit.asset.name,
      model:this.edit.asset.model,
      ownername:this.edit.asset.ownername,
      status:this.edit.asset.status,
    })
  });
}

submitasset(){
  const formData={
    ...this.assetForm.value,
  }
  const id = this.edit ? this.edit.asset.id : null;
  console.log(id)
  if(id){
    this.Model.updateasset(id,formData).subscribe((data:any)=>{
    })
    alert(`User with ID ${id} has been updated`);
  }
 else{
  this.Model.createasset(formData).subscribe((data:any)=>{
    this.asset=data;
  })
  if(this.assetForm.valid){
    alert(`Thank You ${this.assetForm.value.name}`);
  }
  this.assetForm.reset();
 }
}
}
