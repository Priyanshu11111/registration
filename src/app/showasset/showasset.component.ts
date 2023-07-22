import { Component } from '@angular/core';
import{ModelService}from'../../app/model.service';
import{RegistrationService}from'../../app/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showasset',
  templateUrl: './showasset.component.html',
  styleUrls: ['./showasset.component.css']
})
export class ShowassetComponent {
  constructor(private Model:ModelService,private role:RegistrationService,private router:Router){}
  showasset:any
  edit:any
  users:any
  ngOnInit():void{
   this.Model.showasset().subscribe((data:any)=>{
    this.showasset = data;
   })
  }
  editasset(id:number,data:any){
    this.Model.editasset(id,data).subscribe((data:any)=>{
      this.edit=data;
    })
    if(this.role.getUserRole()=== '1')
    {
      this.router.navigate(['createasset/edit',id])
    }
    else{
    }
  }
  deleteasset(id:number){
    if (confirm("Are you sure you want to delete this Asset?")) {
      this.Model.deleteaasset(id).subscribe((data:any)=>{
        this.showasset=this.showasset.filter((users:any) => users.id !==id);

      })
    }
  }
}
