import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { NotificationComponent } from 'src/app/notification/notification.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { RequestComponent } from 'src/app/request/request.component';
import { RequestlistComponent } from 'src/app/requestlist/requestlist.component';
import { ShowrequestsComponent } from 'src/app/showrequests/showrequests.component';
import { UserComponent } from 'src/app/user/user.component';
import { UserdashbordComponent } from 'src/app/userdashbord/userdashbord.component';

const routes: Routes = [
  { path: '',component:UserComponent,
  children: [
    { path: 'usersdashboard', component:UserdashbordComponent },
    {path:'profile',component:ProfileComponent},
    {path:'request',component:RequestComponent},
    {path:'requestlist',component:RequestlistComponent},
    {path:'showrequests/:id',component:ShowrequestsComponent,canActivate:[AuthGuard],data:{roles: ['2']}},
    {path:'notification',component:NotificationComponent},
    {path: '',redirectTo:'/users',pathMatch: 'full'},
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
