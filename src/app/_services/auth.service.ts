import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://localhost:5001/vns/v1';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  login(model: any) {
    const res = this.http.post(`${this.baseUrl}/auth/login`, model).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
    return res;
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    console.log('User logged out');
  }
}
