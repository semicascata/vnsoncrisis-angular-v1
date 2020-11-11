import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Venus On Crisis';
  users: any;

  private baseUrl = 'https://localhost:5001/vns/v1';
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getUsers();
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
