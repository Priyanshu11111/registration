import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationEditComponent } from './registration-edit/registration-edit.component';
import { RegistrationComponent } from './registration/registration.component';
import{ShowcustomerComponent} from './showcustomer/showcustomer.component'

const routes: Routes = [
  {path:'addcustomers',component:RegistrationComponent},
  {path:'showcustomers',component:ShowcustomerComponent},
  {path:'showcustomers/edit/:id',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
