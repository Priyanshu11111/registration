import { Component } from '@angular/core';
import{SuppliersService}from'../../app/suppliers.service';
import { Router } from '@angular/router';
import{RegistrationService}from'../../app/registration.service';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent {
  constructor(private api:SuppliersService,private router:Router,private role:RegistrationService){}
  users:any;
  supplier_data:any
  a:any;
  ngOnInit():void{
    this.api.supplierlist().subscribe((data)=>{
      this.users= data;
    })
  }
  deletesupplier(id: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.api.deletesupplier(id).subscribe((data:any) => {
        this.users=this.users.filter((users:any) => users.id !==id);
      });
    }
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
  editsupplier(id:number,data:any){
    this.api.editsupplier(id,data).subscribe((data:any) => {
      this.supplier_data=data;
  });
  if(this.role.getUserRole()=='1'){
    this.router.navigate(['supplier/edit',id])
  }
  else{
    this.router.navigate(['users/supplier/edit',id])
  }
  }
}
