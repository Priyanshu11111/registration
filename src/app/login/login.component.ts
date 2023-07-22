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
    if(this.api.getUserRole()=== '1')
    {
      this.router.navigate(['admin']);
    }
    else if (this.api.getUserRole()=== '2'){
      this.router.navigate(['users/usersdashboard']);
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
        localStorage.setItem('permissions',JSON.stringify(response.permissions));
        if (credentials.email === 'superadmin@gmail.com') {
          this.api.setUserRole('1');
          this.router.navigate(['admin/admindashbord']);
        } else {
         this.api.setUserRole('2');
         this.router.navigate(['users/usersdashboard'])
        }
      }
    },
    (error: any) => {
      alert('Authentication failed');
    }
  );
  
  }
}

