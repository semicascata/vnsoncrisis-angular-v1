import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  // tslint:disable-next-line: typedef
  login() {
    this.authService.login(this.model).subscribe(
      (res: any) => {
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
    this.authService.logout();
    this.loggedIn = false;
  }

  // tslint:disable-next-line: typedef
  getCurrentUser() {
    this.authService.currentUser$.subscribe(
      (user) => {
        // !! = turns a object to boolean
        this.loggedIn = !!user;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
