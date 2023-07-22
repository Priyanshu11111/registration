import { Component } from '@angular/core';
import{ModelService}from'../../app/model.service';
import{RegistrationService}from'../../app/registration.service';

@Component({
  selector: 'app-authasset',
  templateUrl: './authasset.component.html',
  styleUrls: ['./authasset.component.css']
})
export class AuthassetComponent {
  constructor(private Model:ModelService,private role:RegistrationService){}
  showasset:any;
  ngOnInit():void{
    this.Model.authasset().subscribe((data:any) =>{
      this.showasset =data
      console.log(data)
    },
)
  }
}
