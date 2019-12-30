import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { LoginJwtModel } from 'src/app/models/login-jwt-model';

@Component({
  selector: 'app-enter-pin',
  templateUrl: './enter-pin.component.html',
  styleUrls: ['./enter-pin.component.scss']
})
export class EnterPinComponent implements OnInit {
  @ViewChild('ngOtpInput', { static: true }) ngOtpInput: any;

  @Output() viewChange: EventEmitter<string> = new EventEmitter;

  otp: string;
  showOtpComponent = true;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };
  errorMsg: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onOtpChange(otp) {
    this.otp = otp;
    if (otp.length === 6) {
      const payload = {
        "pin": parseInt(otp, 10)
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

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

  handleViewChange(viewName:string) {
    this.viewChange.emit(viewName);
  }
}
