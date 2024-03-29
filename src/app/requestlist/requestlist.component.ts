import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.css']
})
export class RequestlistComponent {
  constructor(private request:RequestService,private router:Router){}
  requestlist:any;
  errorMessage: any;
  ngOnInit():void{
    this.request.requestlist().subscribe((data) =>{
      this.requestlist = data
      console.log(data)
    },
    (error) => {
      console.error(error);
      this.errorMessage = 'You Have no permissions to access this page contact the administrator';
    }
)
  }
  hasReadPermission(moduleName: string): boolean {
    const permissionsStr = localStorage.getItem('permissions');
    if (permissionsStr) {
      const permissions = JSON.parse(permissionsStr);
      const hasReadPermission = permissions.some((permission: any) => permission.module === moduleName && permission.read);
      console.log(`Has read permission for ${moduleName} module: ${hasReadPermission}`);
      return hasReadPermission;
    }
    return false;
  }
showrequest(id:number){
  this.request.showrequest(id).subscribe((data:any) =>{
    this.request=data;
  })
  this.router.navigate(['users/showrequests',id], { skipLocationChange: true });
}
}
