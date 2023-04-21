import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  constructor(private api:RegistrationService){}
  notification: any;
  unread:any;
  unreadCount:number=0;
  ngOnInit() {
    this.api.getallnotification().subscribe((data: any) => {
      this.notification = data.notifications;
      this.unreadCount = data.unread_count;
    });
  }
}
