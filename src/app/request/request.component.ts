import { Component } from '@angular/core';
import{ModelService}from'../../app/model.service';
import{SuppliersService}from'../../app/suppliers.service';
import{TypesService}from'../../app/types.service';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent {
  constructor(private api:TypesService
    ,private Model:ModelService,
    private Suppliers:SuppliersService,private request:RequestService){}
  requestForm:any;
  users:any;
  models:any;
  suppliers:any;
  getdata:any;
  selectedType: any;
  type:any;
  modeldata:any;
  ngOnInit():void{
    this.requestForm=new FormGroup({
      "types":new FormControl('null', Validators.required),
      "models": new FormControl('null',Validators.required),
      "requestreason":new FormControl('',Validators.required),
    })
  this.api.showTypeslist().subscribe((data)=>{
    this.users= data;
  })
   }
    onChange(event: any) {
      this.selectedType = event.target.value;
      if (this.selectedType) {
        this.request.gettypename(this.selectedType).subscribe((data) => {
          this.getdata = data;
          this.models = this.getdata.type.models;
          });
      }
    }
  submitRequest(){
    const formData = this.requestForm.value;
    console.log(this.requestForm.value);
    this.request.request(formData).subscribe((response) => {
      if (Notification.permission === 'granted') {
        new Notification('Request submitted successfully!', {
          icon: '/assets/icons/check.png',
          body: 'Your request has send successfully.'
        });
      } 
      if(this.requestForm.valid){
        alert(`Thank You`);
      }
    });
    this.requestForm.reset()
  }
}
