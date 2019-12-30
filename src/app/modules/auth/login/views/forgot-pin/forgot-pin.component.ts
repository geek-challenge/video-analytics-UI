import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MailerService } from 'src/app/services/mailer.service';

@Component({
  selector: 'app-forgot-pin',
  templateUrl: './forgot-pin.component.html',
  styleUrls: ['./forgot-pin.component.scss']
})
export class ForgotPinComponent implements OnInit {
  @Output() viewChange: EventEmitter<string> = new EventEmitter;

  emailTo:string;
  newPinSent: boolean = false;

  constructor(
    private mailService: MailerService
  ) { }

  ngOnInit() {
  }

  handleViewChange(viewName: string) {
    this.viewChange.emit(viewName);
  }

  sendPin() {
    const payload = {
      "emailTo": this.emailTo
    }
    this.mailService.sendMail(payload).subscribe(
      res => {
        console.log(res) // go to login with PIN
        this.newPinSent = res.status === 'success';
      }
    );
  }
}
