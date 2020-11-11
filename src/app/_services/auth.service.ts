import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://localhost:5001/vns/v1';

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  login(model: any) {
    const res = this.http.post(`${this.baseUrl}/auth/login`, model);
    return res;
  }
}
