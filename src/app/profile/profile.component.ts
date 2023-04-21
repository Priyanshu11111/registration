import { Component } from '@angular/core';
import{RegistrationService}from'../../app/registration.service';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
profileForm:any;
customers:any;
message: string = '';
showError = false;
constructor(private api:RegistrationService
  ,private router:Router){}
ngOnInit():void{ 
  this.api.getAuthorizedUser().subscribe((data: any) => {
    this.profileForm.setValue({
      'firstname': data.firstname,
      'lastname': data.lastname,
      'email': data.email,
      'password': '',
      'password_confirmation': ''
    });
  });
  this.profileForm=new FormGroup({
    "firstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "lastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
    "password_confirmation":new FormControl(null,[Validators.required]),
});

}
submitProfile(){
  const formData = {
    ...this.profileForm.value,
  }
  this.api.changeProfile(formData).subscribe((response) => {
    console.log('Profile updated successfully');
  }, (error) => {
    console.log('Profile update failed', error);
  });
  if(this.confirmpassword.value!=this.passWord.value){
    alert("password does not match");
    return;
  }
  if(this.profileForm.valid){
    alert(`Thank You ${this.profileForm.value.firstname}`);
  }
  this.router.navigate(['users/usersdashboard'])
}

get firstName(){  
  return this.profileForm.get('firstname');
}
get lastName(){
  return this.profileForm.get('lastname');
}
get passWord(){
  return this.profileForm.get('password');
}
get confirmpassword(){
  return this.profileForm.get('password_confirmation');
}
get emailid(){
  return this.profileForm.get('email');
}
}
