import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOtpInputModule } from 'ng-otp-input';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { EmailPwdComponent } from './login/views/email-pwd/email-pwd.component';
import { ForgotPinComponent } from './login/views/forgot-pin/forgot-pin.component';
import { EnterPinComponent } from './login/views/enter-pin/enter-pin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    EmailPwdComponent,
    ForgotPinComponent,
    EnterPinComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgOtpInputModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
