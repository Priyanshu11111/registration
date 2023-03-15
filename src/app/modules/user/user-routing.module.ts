import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { ShowcustomerComponent } from 'src/app/showcustomer/showcustomer.component';
import { UserComponent } from 'src/app/user/user.component';

const routes: Routes = [
  { path: '',component:UserComponent,
  children: [
    { path: 'showemployee', component: ShowcustomerComponent},
    {path: '',redirectTo:'/users',pathMatch: 'full'},
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
