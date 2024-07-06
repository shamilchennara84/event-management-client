import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.warn('Error during API call:', err);

        if (err.status === 401) {
          Swal.fire(
            'Session expired',
            'Your session has expired. Please login again.',
            'warning'
          );
          this.authService.logout();
        } else if (err.status === 409) {
          Swal.fire('RSVP Conflict', err.error.message, 'info');
        } else {
          Swal.fire(err.statusText, err.error.message, 'error');
        }
        return throwError(() => err);
      })
    );
  }
}
