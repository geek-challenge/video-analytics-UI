import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPwdComponent } from './email-pwd.component';

describe('EmailPwdComponent', () => {
  let component: EmailPwdComponent;
  let fixture: ComponentFixture<EmailPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
