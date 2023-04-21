import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitylogComponent } from 'src/app/activitylog/activitylog.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { ShowcustomerComponent } from 'src/app/showcustomer/showcustomer.component';
import { UserdashbordComponent } from 'src/app/userdashbord/userdashbord.component';
import { NavbarComponent } from '../navbar.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TypesComponent } from 'src/app/types/types.component';
import { TypeslistComponent } from 'src/app/typeslist/typeslist.component';
import { SupplierComponent } from 'src/app/supplier/supplier.component';
import { SupplierlistComponent } from 'src/app/supplierlist/supplierlist.component';
import { ModelsComponent } from 'src/app/models/models.component';
import { ShowmodelsComponent } from 'src/app/showmodels/showmodels.component';
import { NotificationComponent } from 'src/app/notification/notification.component';
import { ShowallnotificationComponent } from 'src/app/showallnotification/showallnotification.component';
import { ShowrequestsComponent } from 'src/app/showrequests/showrequests.component';
import { ViewmodelsComponent } from 'src/app/viewmodels/viewmodels.component';
const routes: Routes = [{
  path:'',component:NavbarComponent,
  children:[
    {path:'activitylog',component:ActivitylogComponent, canActivate: [AuthGuard], data: { roles: ['admin'] }},
    {path:'addemployee',component:RegistrationComponent,canActivate: [AuthGuard], data: { roles: ['admin'] }},
    {path:'admindashbord',component:ShowcustomerComponent,canActivate: [AuthGuard], data: { roles: ['admin'] }},
    {path:'usersdashboard',component:UserdashbordComponent,canActivate: [AuthGuard], data: { roles: ['admin'] }},
    {path:'admindashbord/edit/:id',component:RegistrationComponent,canActivate: [AuthGuard], data: { roles: ['admin'] }},
    {path:'supplier',component:SupplierComponent,canActivate: [AuthGuard], data: { roles: ['admin'] }},
    {path:'types',component:TypesComponent,canActivate: [AuthGuard], data: { roles: ['admin'] }},
    {path:'models',component:ModelsComponent,canActivate:[AuthGuard],data:{roles: ['admin']}},
    {path:'supplierlist',component:SupplierlistComponent,canActivate: [AuthGuard], data: { roles: ['admin']}},
    {path:'typeslist',component:TypeslistComponent,canActivate: [AuthGuard], data: { roles: ['admin'] }},
    {path:'showmodels',component:ShowmodelsComponent,canActivate: [AuthGuard], data: { roles: ['admin']}},
    {path:'models/edit/:id',component:ModelsComponent,canActivate:[AuthGuard],data:{roles: ['admin']}},
    {path:'types/edit/:id',component:TypesComponent,canActivate:[AuthGuard],data:{roles: ['admin']}},
    {path:'notification',component:NotificationComponent},
    {path:'modelsview/:id',component:ViewmodelsComponent},
    {path:'showrequests/:id',component:ShowrequestsComponent,canActivate:[AuthGuard],data:{roles: ['admin']}},
    {path:'request',component:ShowallnotificationComponent,canActivate:[AuthGuard],data:{roles: ['admin']}},
    {path:'supplier/edit/:id',component:SupplierComponent,canActivate:[AuthGuard],data:{roles: ['admin']}},
    {path:'',redirectTo:'/admin',pathMatch:'full'},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
