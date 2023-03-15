import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:'admin',
    canActivate:[AuthGuard],
    loadChildren:()=>import('./navbar/admin/admin.module').then((m)=>m.AdminModule),
  },
  {
    canActivate:[AuthGuard],
    path:'users',
    loadChildren:()=>import('./modules/user/user.module').then((m)=>m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
