import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sideNavToogled=new EventEmitter<boolean>();
  menuStatus: boolean=false;
  SideNavToogle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToogled.emit(this.menuStatus);
  }
}
