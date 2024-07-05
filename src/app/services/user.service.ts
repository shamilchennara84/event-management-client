import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}events`; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }

  getUserEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user`);
  }

  addUserEvent(event: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, event);
  }
}
