import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { UserModel } from '../models/user-model';
import { LoginJwtModel } from '../models/login-jwt-model';
import { environment } from 'src/environments/environment';

// const AUTH_SERVER = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient
  ) { }

  login(payload): Observable<LoginJwtModel> {
    const url = environment.baseUrl + environment.services.login;

    return this.httpClient.post(`${url}`, payload)
    .pipe(
      tap(async (res: LoginJwtModel) => {
        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.access_token);
          localStorage.setItem("EXPIRES_IN", ""+res.expires_in);
          this.authSubject.next(true);
        }
      }),
      catchError(this.errorMgmt)
    );
  }

  signOut() {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }

  isAuthenticated() {
    return this.authSubject.asObservable();
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage: any;
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error;
    }
    return throwError(errorMessage);
  }
}
