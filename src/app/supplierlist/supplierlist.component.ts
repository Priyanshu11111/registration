import { Component } from '@angular/core';
import{SuppliersService}from'../../app/suppliers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent {
  constructor(private api:SuppliersService,private router:Router){}
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
  editsupplier(id:number,data:any){
    this.api.editsupplier(id,data).subscribe((data:any) => {
      this.supplier_data=data;
  });
  this.router.navigate(['supplier/edit',id])
  }
}
