import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginJwtModel } from 'src/app/models/login-jwt-model';

@Component({
  selector: 'app-email-pwd',
  templateUrl: './email-pwd.component.html',
  styleUrls: ['./email-pwd.component.scss']
})
export class EmailPwdComponent implements OnInit {
  @Output() viewChange: EventEmitter<string> = new EventEmitter;

  email: string;
  password: string;
  errorMsg: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  handleViewChange(viewName: string) {
    this.viewChange.emit(viewName);
  }

  login() {
    const payload = {
      "email": this.email,
      "password": this.password
    };
    this.authService.login(payload).subscribe(
      (res: LoginJwtModel) => {
        this.errorMsg = null;
        // alert('Login Successful');
      },
      (err: any) => {
        console.log(err)
        this.errorMsg = err.error;
        // alert(err.error);
      }
    );
  }
}
