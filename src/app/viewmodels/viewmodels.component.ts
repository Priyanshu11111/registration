import { Component } from '@angular/core';
import{TypesService}from'../../app/types.service';
import{ModelService}from'../../app/model.service';
import { Router,ActivatedRoute } from '@angular/router';
import{FormGroup,FormControl,Validators}from'@angular/forms';

@Component({
  selector: 'app-viewmodels',
  templateUrl: './viewmodels.component.html',
  styleUrls: ['./viewmodels.component.css']
})
export class ViewmodelsComponent {
viewmodel:any;
model_data:any;
constructor(private Model:ModelService,public router:ActivatedRoute){}
ngOnInit():void{
  this.viewmodel=new FormGroup({
    "types":new FormControl(null, Validators.required),
    "supplier": new FormControl(null,Validators.required),
    "name": new FormControl(null, Validators.required),
    "alias": new FormControl(null, Validators.required),
  })
  this.router.params.subscribe((params)=>{
    this.view(params["id"])
})
}
view(id:number){
  this.Model.viewmodel(id).subscribe((data: any) => {
    this.model_data= data;
    this.viewmodel.patchValue({
      types: this.model_data.model.type.name,
      supplier: this.model_data.model.supplier.name,
      name: this.model_data.model.name,
      alias: this.model_data.model.alias
  })
  });
}
}
