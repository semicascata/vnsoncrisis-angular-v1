import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './_models/user.interface';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Venus On Crisis';
  users: any;

  private baseUrl = 'https://localhost:5001/vns/v1';
  constructor(private http: HttpClient, private authService: AuthService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  // tslint:disable-next-line: typedef
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.authService.setCurrentUser(user);
  }

  async getUsers(): Promise<any> {
    try {
      this.http
        .get(`${this.baseUrl}/users`)
        .subscribe((res) => (this.users = res));
    } catch (err) {
      console.log(err);
    }
  }
}
