import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let authService = inject(AuthService)
  let token:string = "";
  authService.tokenSubject$.subscribe(newToken => {token = newToken;})
  return next(
      req = req.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      }));
};
