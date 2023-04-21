import { Component } from '@angular/core';
import{TypesService}from'../../app/types.service';
import{ModelService}from'../../app/model.service';
import{SuppliersService}from'../../app/suppliers.service';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  constructor(private api:TypesService
    ,public router:ActivatedRoute,private Model:ModelService,
    private Suppliers:SuppliersService){}
    users:any;
    modelsForm:any
    a:any;
    model:any;
    suppliers:any;
    model_data:any;
    ngOnInit():void{
      this.modelsForm=new FormGroup({
        "types":new FormControl(null, Validators.required),
        "supplier": new FormControl(null,Validators.required),
        "name": new FormControl(null, Validators.required),
        "alias": new FormControl(null, Validators.required),
      });
  this.router.params.subscribe((params) => {
    this.Model.editModel(params['id'], []).subscribe(
      (data: any) => {
        this.editModel(params['id'], data); // pass the data to editModel function
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  });
      this.Model.getmodels().subscribe((data) => {
        this.model = data;
      })
      this.api.showTypeslist().subscribe((data)=>{
        this.users= data;
      })
      this.Suppliers.supplierlist().subscribe((data)=>{
        this.suppliers= data;
      }) 
    }
    modelsSubmit(){
      const formData = {
        ...this.modelsForm.value,
      }    
      const id = this.model_data ? this.model_data.model.id : null;
      if(id){
        this.Model.updateModel(id, formData).subscribe((data:any) => {
        });
        alert(`User with ID ${id} has been updated`);
        this.modelsForm.reset();
      }else{ 
        this.Model.models(formData).subscribe((response) => {
        if(this.modelsForm.valid){
          alert(`Thank You ${this.modelsForm.value.name}`);
        }
        this.modelsForm.reset();
      }, (error) => {
        console.log('Types Not Created', error);
      });
    }}
    editModel(id:number,data:any) {
      this.Model.editModel(id,data).subscribe((data: any) => {
        this.model_data=data
        console.log(this.model_data)
        this.modelsForm.patchValue({
          types:this.model_data.model.types,
          supplier:this.model_data.model.supplier,
          name:this.model_data.model.name,
          alias:this.model_data.model.alias
        }
        )
      }
      );
    }
    
    get Type(){  
      return this.modelsForm.get('types');
    }
    get Supplier(){  
      return this.modelsForm.get('supplier');
    }
    get Name(){
      return this.modelsForm.get('name');
    }
    get alias(){
      return this.modelsForm.get('alias');
    }
}
