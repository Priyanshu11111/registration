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
    if(this.api.getUserRole()=== 'admin')
    {
      this.router.navigate(['admin']);
    }
    else if (this.api.getUserRole()=== 'user'){
      this.router.navigate(['users']);
    }
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
          this.api.setUserRole('admin');
          this.router.navigate(['admin']);
        } else {
         this.api.setUserRole('user');
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

