import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
