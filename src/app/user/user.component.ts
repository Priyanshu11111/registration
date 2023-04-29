import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  constructor(private api:RegistrationService){}
  notification: any;
  unread:any;
  unreadCount:number=0;
  
  ngOnInit() {
    this.api.getLatestNotification().subscribe((data: any) => {
      this.notification = data.notifications;
      this.unreadCount = data.unread_count;
  });
  
  }

  hasReadPermission(moduleName: string): boolean {
    const permissionsStr = localStorage.getItem('permissions');
    if (permissionsStr) {
      const permissions = JSON.parse(permissionsStr);
      const hasReadPermission = permissions.some((permission: any) => permission.module === moduleName && permission.read);
      return hasReadPermission;
    }
    return false;
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
  markAsread(id:number){
    this.api.markAsread(id).subscribe((data: any) => {
      if (Notification.permission === 'granted') {
        new Notification('Message Read Successfully!', {
          icon: '/assets/icons/check.png',
          body: 'Your Message Read Successfully.'
        });
      }
      this.unread=data;
      this.unreadCount --;
      this.notification = this.notification.filter((n: any) => n.id !== id);
    });
  }
  logout():void {
    this.api.logout().subscribe((data: any) => {
    })
}
}
