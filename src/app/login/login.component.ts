import { Component,OnInit  } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{RegistrationService}from'../../app/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private api:RegistrationService,private router: Router
  ){}
loginForm:any;
customers:any;
ngOnInit(): void {
  this.loginForm=new FormGroup({
    "email":new FormControl(null),
    "password":new FormControl(null),
  });
  if(this.api.IsloggedIn()){
  }  
};
onSubmit(){
  const credentials = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password
  }; this.api.authenticateUser(credentials).subscribe(
    (response: any) => {
      if (response.token) {
        localStorage.setItem('token', response.token);
        if (credentials.email === 'superadmin@gmail.com') {
          this.api.setUserRole(1);
          this.router.navigate(['admin']);
        } else {
         this.api.setUserRole(0);
         this.router.navigate(['users'])
        }
      }
    },
    (error: any) => {
      alert('Authentication failed');
    }
  );
  }
}

