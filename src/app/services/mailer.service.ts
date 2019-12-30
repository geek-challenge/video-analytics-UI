import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sendMail(payload): Observable<any> {
    const url = environment.baseUrl + environment.services.sendPin;

    return this.httpClient.post(
      url,
      payload
    ).pipe(
      // tap(async (res: LoginJwtModel) => {
      //   if (res.user) {
      //     localStorage.setItem("ACCESS_TOKEN", res.access_token);
      //     localStorage.setItem("EXPIRES_IN", "" + res.expires_in);
      //     this.authSubject.next(true);
      //   }
      // }),
      catchError(this.errorMgmt)
    )
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
