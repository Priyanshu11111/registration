import { Component } from '@angular/core';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-showpermission',
  templateUrl: './showpermission.component.html',
  styleUrls: ['./showpermission.component.css']
})
export class ShowpermissionComponent {
  constructor(private permis:PermissionService ){}
  showpermission:any
  users:any
  ngOnInit() {
    this.permis.showpermission().subscribe((data:any) => {
      this.showpermission = data
    })
  }
  deletepermission(id:number){
    if (confirm("Are you sure you want to delete this user?")) {
      this.permis.deletepermission(id).subscribe((data:any) => {
        this.showpermission=this.showpermission.filter((showpermission:any)=> showpermission.id !== id);
      });
    }
  }
}
