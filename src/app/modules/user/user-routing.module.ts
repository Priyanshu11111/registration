import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitylogComponent } from 'src/app/activitylog/activitylog.component';
import { AuthassetComponent } from 'src/app/authasset/authasset.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ModelsComponent } from 'src/app/models/models.component';
import { NotificationComponent } from 'src/app/notification/notification.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { RequestComponent } from 'src/app/request/request.component';
import { RequestlistComponent } from 'src/app/requestlist/requestlist.component';
import { ShowassetComponent } from 'src/app/showasset/showasset.component';
import { ShowmodelsComponent } from 'src/app/showmodels/showmodels.component';
import { ShowrequestsComponent } from 'src/app/showrequests/showrequests.component';
import { SupplierComponent } from 'src/app/supplier/supplier.component';
import { SupplierlistComponent } from 'src/app/supplierlist/supplierlist.component';
import { TypesComponent } from 'src/app/types/types.component';
import { TypeslistComponent } from 'src/app/typeslist/typeslist.component';
import { UserComponent } from 'src/app/user/user.component';
import { UserdashbordComponent } from 'src/app/userdashbord/userdashbord.component';
import { ViewmodelsComponent } from 'src/app/viewmodels/viewmodels.component';

const routes: Routes = [
  { path: '',component:UserComponent,
  children: [
    {path: 'usersdashboard', component:UserdashbordComponent },
    {path:'profile',component:ProfileComponent},
    {path:'request',component:RequestComponent},
    {path:'activitylog',component:ActivitylogComponent, canActivate: [AuthGuard], data: { roles: ['2'] }},
    {path:'requestlist',component:RequestlistComponent,canActivate: [AuthGuard], data: { roles: ['2'] }},
    {path:'types',component:TypesComponent,canActivate: [AuthGuard], data: { roles: ['2'] }},
    {path:'supplier',component:SupplierComponent,canActivate: [AuthGuard], data: { roles: ['2'] }},
    {path:'models',component:ModelsComponent,canActivate:[AuthGuard],data:{roles: ['2']}},
    {path:'typeslist',component:TypeslistComponent,canActivate: [AuthGuard], data: { roles: ['2'] }},
    {path:'supplierlist',component:SupplierlistComponent,canActivate: [AuthGuard], data: { roles: ['2']}},
    {path:'showmodels',component:ShowmodelsComponent,canActivate: [AuthGuard], data: { roles: ['2']}},
    {path:'models/edit/:id',component:ModelsComponent,canActivate:[AuthGuard],data:{roles: ['2']}},
    {path:'types/edit/:id',component:TypesComponent,canActivate:[AuthGuard],data:{roles: ['2']}},
    {path:'showrequests/:id',component:ShowrequestsComponent,canActivate:[AuthGuard],data:{roles: ['2']}},
    {path:'supplier/edit/:id',component:SupplierComponent,canActivate:[AuthGuard],data:{roles: ['2']}},
    {path:'notification',component:NotificationComponent},
    {path:'authasset',component:AuthassetComponent},
    {path:'modelsview/:id',component:ViewmodelsComponent},
    {path: '',redirectTo:'/users',pathMatch: 'full'},
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
