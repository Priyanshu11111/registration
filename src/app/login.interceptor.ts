import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from './registration.service';


@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private router: Router,private http: HttpClient,private api:RegistrationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.api.getToken();

    if (token) {
      request = this.addToken(request, token);
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.api.generaterefreshtoken().pipe(
            switchMap((response: any) => {
              const newToken = response.access_token;
              const newRefreshToken = response.refresh_token;
              this.api.SaveTokens(newToken, newRefreshToken);
              request = this.addToken(request, newToken);
              return next.handle(request);
            }),
            catchError(err => {
              this.api.logout();
              return throwError(error);
            })
          );
        }
        return throwError(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}