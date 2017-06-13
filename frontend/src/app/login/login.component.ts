import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

import {Router} from '@angular/router';

import { AuthService } from './../auth.service';

const TOKEN = 'token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errMessage : string;

  constructor(private authService:AuthService, private router:Router) { }

  login(form:any):void {
    this.errMessage = null;
    this.authService.login(form.value.username, form.value.password).subscribe(
      (statusCode : number) => {
        form.reset();
        this.router.navigate(['']);
      }, err => {
        this.errMessage = '(' + err.status + ') ' + err.statusText;
      }
    );
  }

  logout():void {
    this.authService.logout();
  }

}
