import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:'admin',
    loadChildren:()=>import('./navbar/admin/admin.module').then((m)=>m.AdminModule),
    canActivate:[AuthGuard],
    data: { roles: ['1'] } 
  },
  {
    path:'users',
    loadChildren:()=>import('./modules/user/user.module').then((m)=>m.UserModule),
    canActivate:[AuthGuard],
    data: { roles: ['2'] } 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
