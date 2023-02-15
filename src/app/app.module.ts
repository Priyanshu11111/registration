import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule,FormsModule}from'@angular/forms';
import {HttpClientModule}from '@angular/common/http';
/* import{RegistrationService}from '/New folder/registration/src/app/registration.service'; */
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
,  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
