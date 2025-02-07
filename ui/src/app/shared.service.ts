import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  username =  signal<string>('Not logged in');
}
