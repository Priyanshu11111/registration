import { ReturnStatement } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import{RegistrationService}from'../../app/registration.service';
import { hashSync,compareSync } from 'bcryptjs';
@Component({

  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private api:RegistrationService){}
  registerForm:any;
  ngOnInit():void{
    this.api.apiCall().subscribe((data)=>{
      console.log(data);
    })
  this.registerForm=new FormGroup({
    "firstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "lastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
    "password_confirmation":new FormControl(null,[Validators.required]),
  });
  }
  submitData()
  {
    const hashedPassword = hashSync(this.registerForm.value.password, 10);
    const formData = {
      ...this.registerForm.value,
      password: hashedPassword,
      password_confirmation: hashedPassword
    }
    if(this.confirmpassword.value!=this.passWord.value){
      alert("password does not match");
      return;
    }
  this.api.submitData(formData).subscribe(data => {
      console.log(data);
    })
    
    if(this.registerForm.valid){
      alert(`Thank You ${this.registerForm.value.firstname}`);
    }
  }
  get firstName(){
    return this.registerForm.get('firstname');
  }
  get lastName(){
    return this.registerForm.get('lastname');
  }
  get emailid(){
    return this.registerForm.get('email');
  }
  get passWord(){
    return this.registerForm.get('password');
  }
  get confirmpassword(){
    return this.registerForm.get('password_confirmation');
  }
}
