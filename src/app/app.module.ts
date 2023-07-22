import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule,FormsModule}from'@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS}from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { LoginComponent } from './login/login.component';
import{NgxPaginationModule}from 'ngx-pagination'
import { Subscription } from 'rxjs';
import { AdminRoutingModule } from './navbar/admin/admin-routing.module';
import { UserComponent } from './user/user.component';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivitylogComponent } from './activitylog/activitylog.component';
import { NotificationComponent } from './notification/notification.component';
import{LoginInterceptor}from'./login.interceptor';
import { TypesComponent } from './types/types.component';
import { TypeslistComponent } from './typeslist/typeslist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SupplierComponent } from './supplier/supplier.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SupplierlistComponent } from './supplierlist/supplierlist.component';
import { ModelsComponent } from './models/models.component';
import { ShowmodelsComponent } from './showmodels/showmodels.component';
import { ShowallnotificationComponent } from './showallnotification/showallnotification.component';
import { RequestComponent } from './request/request.component';
import { RequestlistComponent } from './requestlist/requestlist.component';
import { ShowrequestsComponent } from './showrequests/showrequests.component';
import { ViewtypesComponent } from './viewtypes/viewtypes.component';
import { ViewmodelsComponent } from './viewmodels/viewmodels.component';
import { ViewsuppliersComponent } from './viewsuppliers/viewsuppliers.component';
import { PermissionComponent } from './permission/permission.component';
import { RolesComponent } from './roles/roles.component';
import { ShowrolesComponent } from './showroles/showroles.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AssetComponent } from './asset/asset.component';
import { ShowpermissionComponent } from './showpermission/showpermission.component';
import { ShowassetComponent } from './showasset/showasset.component';
import { AuthassetComponent } from './authasset/authasset.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    ShowcustomerComponent,
    LoginComponent,
    UserComponent,
    UserdashbordComponent,
    ProfileComponent,
    ActivitylogComponent,
    NotificationComponent,
    TypesComponent,
    TypeslistComponent,
    SupplierComponent,
    SupplierlistComponent,
    ModelsComponent,
    ShowmodelsComponent,
    ShowallnotificationComponent,
    RequestComponent,
    RequestlistComponent,
    ShowrequestsComponent,
    ViewtypesComponent,
    ViewmodelsComponent,
    ViewsuppliersComponent,
    PermissionComponent,
    RolesComponent,
    ShowrolesComponent,
    AssetComponent,
    ShowpermissionComponent,
    ShowassetComponent,
    AuthassetComponent,
  ],
  imports: [

    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'}),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AdminRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule
,  ],
  providers: [
    
/*     { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }
    */],
  bootstrap: [AppComponent]
})
export class AppModule { }
