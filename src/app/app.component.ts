import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment7';
  constructor(private loginout:AuthService, private router:Router){}
  login(){
    this.loginout.login();
  }
  logout(){
    this.loginout.logout();
    this.router.navigate(['Add'])
  }
}
