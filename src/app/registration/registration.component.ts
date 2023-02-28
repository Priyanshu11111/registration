    import { ReturnStatement } from '@angular/compiler';
    import { Component,OnInit } from '@angular/core';
    import{FormGroup,FormControl,Validators}from'@angular/forms';
    import{RegistrationService}from'../../app/registration.service';
    import { hashSync,compareSync } from 'bcryptjs';
    import { Router,ActivatedRoute } from '@angular/router';
    @Component({

      selector: 'app-registration',
      templateUrl: './registration.component.html',
      styleUrls: ['./registration.component.css']
    })
    export class RegistrationComponent {
      constructor(private api:RegistrationService
        ,public router:ActivatedRoute){}
      registerForm:any;
      customers:any;
      data:any;
      customers_data:any;
      ngOnInit():void{
        this.api.apiCall().subscribe((data)=>{
          this.customers = data;
        })
      this.registerForm=new FormGroup({
        "firstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        "lastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        "email":new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        "password":new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
        "password_confirmation":new FormControl(null,[Validators.required]),
      });

        this.router.params.subscribe((params)=>{
            this.editUser(params["id"],[])
        })
        }
      submitData()
      {
        const hashedPassword = hashSync(this.registerForm.value.password, 10);
        const formData = {
          ...this.registerForm.value,
          password: hashedPassword,
          password_confirmation: hashedPassword
        }
        const id = this.customers_data ? this.customers_data.customer.id : null;
        if (id) {
          const emailExists = this.customers.some((user: any) => user.nemail === this.registerForm.value.email && user.id !== id);
         if (emailExists) {
            alert('This email already exists in the database. Please use a different email.');
            return;
          }
          // If the ID exists, update the record
          this.api.updateUser(id, formData).subscribe(data => {
          });
          alert(`User with ID ${id} has been updated`);
          this.customers_data.customer.firstname = this.registerForm.value.firstname;
          this.customers_data.customer.lastname = this.registerForm.value.lastname;
          this.customers_data.customer.email = this.registerForm.value.email;
        } else {
          const emailExists = this.customers.some((user: any) => user.email === this.registerForm.value.email);
          if (emailExists) {
            alert('This email already exists in the database. Please use a different email.');
            return;
          }
          this.api.submitData(formData).subscribe(data => {
            console.log(data);
          });
          alert(`New user has been created`);
        }
        if(this.confirmpassword.value!=this.passWord.value){
          alert("password does not match");
          return;
        }
        if(this.registerForm.valid){
          alert(`Thank You ${this.registerForm.value.firstname}`);
        }
      }
      editUser(id:number,data:any){
        this.api.editUser(id,data).subscribe((data: any) => {
          this.customers_data = data;
          this.registerForm.patchValue({
            firstname:this.customers_data.customer.firstname,
            lastname:this.customers_data.customer.lastname,
            email:this.customers_data.customer.email,
          })
        });
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
