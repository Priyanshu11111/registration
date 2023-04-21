import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators,FormArray,FormBuilder }from'@angular/forms';
import{SuppliersService}from'../../app/suppliers.service';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  supplierForm: any;
  fields: any;
  supplier_data:any
constructor(private api:SuppliersService,private fb: FormBuilder,public router:ActivatedRoute){}
ngOnInit() {
  this.router.params.subscribe((params)=>{
    this.editsupplier(params["id"],[])
  })
  this.supplierForm = this.fb.group({
    name: ['', [Validators.required]],
    comment: ['', Validators.required],
    fields: this.fb.array([])
  });
  this.fields = this.supplierForm.get('fields') as FormArray;
}
addFields() {
  const newGroup = this.fb.group({
    id: [],
    supplier_name: ['', Validators.required],
    address: ['', Validators.required],
    number: ['', Validators.required]
  });
  this.fields.push(newGroup);
}
createSupplier(){  
  const formData = this.supplierForm.value;
  const id = this.supplier_data ? this.supplier_data.supplier.id : null;
  if(id){
    console.log(this.supplier_data);
    this.api.updatesupplier(id,formData).subscribe((data:any) => {
    });
    console.log(formData);
    alert(`User with ID ${id} has been updated`);
    this.supplierForm.reset();
  }else{
    this.api.supplier(formData).subscribe( (response) => {
      alert(`Thank You ${this.supplierForm.value.name}`)
      this.supplierForm.reset();
     },
     (error) => {
       // handle error response
     }
   );
  }
}
editsupplier(id:number,data:any){
this.api.editsupplier(id,data).subscribe((data:any) =>{
this.supplier_data=data;
this.supplierForm.patchValue({
  name:this.supplier_data.supplier.name,
  comment:this.supplier_data.supplier.comment,
});  
this.fields = this.supplierForm.get('fields') as FormArray;
const fieldsArray = this.supplierForm.get('fields') as FormArray;
fieldsArray.clear(); // Clear the FormArray
this.supplier_data.supplierContacts.forEach((contact:any) => {
  fieldsArray.push(this.fb.group({
    id:[contact.id],
    supplier_name: [contact.supplier_name, Validators.required],
    address: [contact.address, Validators.required],
    number: [contact.number, Validators.required]
  }));
});  
})
}
get Name(){  
  return this.supplierForm.get('name');
}
get Comment(){  
  return this.supplierForm.get('comment');
}
}

