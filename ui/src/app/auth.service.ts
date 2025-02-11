import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenSubject$ = new BehaviorSubject<string>("");

  get token() {
    console.log(this.tokenSubject$.value);
    return this.tokenSubject$.value;
  }

  setToken(token: string) {
    this.tokenSubject$.next(token);
  }
}
