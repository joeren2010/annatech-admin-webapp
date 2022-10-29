import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent,    
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule       
  ]
})
export class AuthModule { }
