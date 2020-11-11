import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  login() {
    this.authService.login(this.model).subscribe(
      (res) => {
        console.log(res);
        this.loggedIn = true;
        this.model = {};
      },
      (err) => {
        this.model = {};
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  logout() {
    this.loggedIn = false;
  }
}
