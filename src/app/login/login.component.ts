import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private nav: NavService, private route: Router) {
   }

  ngOnInit(): void {
    this.isLoggedIn = this.nav.checkCredentials();    
    let i = window.location.href.indexOf('code');
    if(!this.isLoggedIn && i != -1) {
      this.nav.retrieveToken(window.location.href.substring(i + 5));
    }
  }

  login() {
    window.location.href = 
      'http://localhost:8080/auth/realms/sharehub/protocol/openid-connect/auth?response_type=code&scope=openid&client_id=' + 
         this.nav.clientId + '&redirect_uri='+ this.nav.redirectUri;
    }
 
  logout() {
    this.nav.logout();
  }

}
