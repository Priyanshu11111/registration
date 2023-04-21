import { Component } from '@angular/core';
import{ModelService}from'../../app/model.service';
import { Router } from '@angular/router';
import{TypesService}from'../../app/types.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-showmodels',
  templateUrl: './showmodels.component.html',
  styleUrls: ['./showmodels.component.css']
})
export class ShowmodelsComponent {
  constructor(private Model:ModelService,private router:Router,private api:TypesService,private request:RequestService){}
  users:any;
  a:any;
  model_data:any;
  types:any;
  type:any;
  ngOnInit():void{
    this.Model.getmodels().subscribe((data)=>{
      this.users= data;
    }) 
    this.api.showTypeslist().subscribe((data)=>{
      this.types= data;
    })
  }
  deletemodels(id: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.Model.deletemodels(id).subscribe((data:any) => {
        this.users=this.users.filter((users:any)=> users.id !== id);
      });
    }
  }
 /*  getTypeName(Id: number) {
    const type = this.types.find((types:any) => types.id == Id);
    return type ? type.name : '';
  } */
  editModel(id:number,data:any) {
    this.Model.editModel(id,data).subscribe((data: any) => {
      this.model_data= data;
    });
    this.router.navigate(['models/edit',id])
  }
  view(id:number,data:any){
    this.Model.editModel(id,data).subscribe((data: any) => {
      this.model_data= data;
    });
    this.router.navigate(['admin/modelsview',id],{ skipLocationChange: true })
  }
}
