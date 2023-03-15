import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { ShowcustomerComponent } from 'src/app/showcustomer/showcustomer.component';
import { NavbarComponent } from '../navbar.component';

const routes: Routes = [{
  path:'',component:NavbarComponent,
  children:[
    {path:'addemployee',component:RegistrationComponent},
    {path:'showemployee',component:ShowcustomerComponent},
    {path:'showemployee/edit/:id',component:RegistrationComponent},
    {path:'',redirectTo:'/admin',pathMatch:'full'},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
