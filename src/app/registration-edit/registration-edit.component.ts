import { Component,OnInit,Input } from '@angular/core';
import{ActivatedRoute}from '@angular/router'
import{RegistrationService}from'../../app/registration.service';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.css']
})
export class RegistrationEditComponent {
  @Input() sideNavStatus:boolean=false; 
  list=[
    {
      number:'1',
      name:'home',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name:'profile',
      icon:'fa-thin fa-plus'
    }
  ];
constructor(private api:RegistrationService,private route:ActivatedRoute){}

}