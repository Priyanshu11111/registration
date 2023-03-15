import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule,FormsModule}from'@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { LoginComponent } from './login/login.component';
import{NgxPaginationModule}from 'ngx-pagination'
import { AdminRoutingModule } from './navbar/admin/admin-routing.module';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    ShowcustomerComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AdminRoutingModule
,  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
