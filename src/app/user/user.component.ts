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
/*       this.notification = this.notification.filter((notification: any) => notification.id !== id);
 */    });
  
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
