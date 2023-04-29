import { Component,OnDestroy,OnInit  } from '@angular/core';
import{TypesService}from'../../app/types.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import{RegistrationService}from'../../app/registration.service';


@Component({
  selector: 'app-typeslist',
  templateUrl: './typeslist.component.html',
  styleUrls: ['./typeslist.component.css']
})
export class TypeslistComponent {
  constructor(private api:TypesService
    ,private role:RegistrationService,private router:Router ){}
    users:any;
    a:any;
    types_data:any;
    pollSubscription: Subscription | undefined;

    ngOnInit():void{
      this.api.showTypeslist().subscribe((data)=>{
        this.users= data;
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
    deletetype(id:number){
      if (confirm("Are you sure you want to delete this user?")) {
        this.api.typesdelete(id).subscribe((data:any) => {
          this.users=this.users.filter((users:any) => users.id !==id);
        });
      }
    }
    edittype(id:number,data:any){
      this.api.edittype(id,data).subscribe((data:any) => {
        this.types_data=data;
    });
    if(this.role.getUserRole()=== '1')
    {
      this.router.navigate(['types/edit',id])
    }
    else{
      this.router.navigate(['users/types/edit',id])
    }
    }
}
