import { Component, EventEmitter, Output } from '@angular/core';
import{RegistrationService}from'../../app/registration.service';
import { ActivatedRoute, Router } from'@angular/router';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private api:RegistrationService,private router:Router){}
  logout():void {
    this.api.logout().subscribe((data: any) => {
    })
}

assetForm:any;
currentUser: any;
currentRole: string = '';
asset:any;
notification: any;
unread:any;
unreadCount:number=0;
customerName: string='';
hasTypeReadPermission = false;
hasModelReadPermission = false;
hasSupplierReadPermission=false;
hasActivityPermission=false;
hasRequestPermission=false;
ngOnInit():void{
  const permissionsStr = localStorage.getItem('permissions');
  if (permissionsStr) {
   const permissions = JSON.parse(permissionsStr);
   console.log(permissions);
   const modules = ['Types', 'Models', 'Supplier', 'Activity', 'Request'];
   for (const module of modules) {
    const hasReadPermission = permissions.some((permission: any) => permission.module === module && permission.read);
    const hasWritePermission = permissions.some((permission: any) => permission.module === module && permission.write);
  }
 }
  const pusher = new Pusher('add73946e79f8b4e1b9c', {
    cluster: 'ap2',
  });

  const channel = pusher.subscribe('my-channel');
  channel.bind('my-event', (data: any) => {
    const notification = new Notification('Request Get succesfully!', {
        icon: '/assets/icons/check.png',
        body: `User ${data.user_name} requested to ${data.models}`,
      });
      notification.onclick = () => {
        this.router.navigate(['request']);
        notification.close();
      };
  });
 /*    this.api.assetCall().subscribe((data)=>{
      this.asset = data;
    }) */  this.api.getLatestNotification().subscribe((data: any) => {
      this.notification = data.notifications;
      this.unreadCount = data.unread_count;
    });
  }
  onNotificationClick(type:any) {
    if (type == "App\\\Notifications\\\RequsetNotification") {
      this.router.navigate(['request']);
    } 
    else if(type == "App\\\Notifications\\\ModelsNotification"){
      this.router.navigate(['showmodels']);
    }
    else if(type =="App\\\Notifications\\\TypesNotification"){
      this.router.navigate(['typeslist']);
    }
    else if(type =="App\\\Notifications\\\SuppliersNotification"){
      this.router.navigate(['supplierlist']);
    }
    }
    
  markAsread(id:number){
    this.api.markAsread(id).subscribe((data: any) => {
      if (Notification.permission === 'granted') {
        new Notification('Message Read successfully!', {
          icon: '/assets/icons/check.png',
          body: 'Your Message has Read successfully.'
        });
      }
      
      this.unread=data;
      this.unreadCount --;
      this.notification = this.notification.filter((n: any) => n.id !== id);
    });
    this.assetForm=new FormGroup({
      "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "product-name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "image":new FormControl(null,[Validators.required]),
    });
}

submitAsset(){
  const formData = {
    ...this.assetForm.value, 
  }
  this.api.submitAsset(formData).subscribe(data => {
    console.log(data);
  });
}
get Name(){  
  return this.assetForm.get('name');
}
get ProductName(){
  return this.assetForm.get('product-name');
}
get Image(){
  return this.assetForm.get('image');
}
getUserRole() {
  return localStorage.getItem('role');
}
switchRole() {
  const currentRole = this.api.getUserRole();
  if (currentRole === 'admin') {
    this.api.setUserRole('users');
    this.router.navigate(['users']);
  }
}
}
