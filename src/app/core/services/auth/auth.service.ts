import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  authenticate(userName: string, password: string): Observable<any> {
    return this.http.post(`${API_URL}/user/login`, { userName, password });
  }
}
