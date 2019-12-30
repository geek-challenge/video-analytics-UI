import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnterPinComponent } from './login/views/enter-pin/enter-pin.component';
import { ForgotPinComponent } from './login/views/forgot-pin/forgot-pin.component';
import { EmailPwdComponent } from './login/views/email-pwd/email-pwd.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: EnterPinComponent
      },
      {
        path: 'forgot-pin',
        component: ForgotPinComponent
      },
      {
        path: 'emailIdLogin',
        component: EmailPwdComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
