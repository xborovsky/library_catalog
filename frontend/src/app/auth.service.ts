import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

const TOKEN = "token";
const ENDPOINT_URL = 'http://localhost:1337/localhost:8080/book-library-backend';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private http:Http, private router:Router) { }

  login(username:string, password:string):Observable<number> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(ENDPOINT_URL + '/login', JSON.stringify(new User(username, password)), options)
      .map((res : Response) => { 
        localStorage.setItem(TOKEN, res.text());
        return 200; 
      });
  }

  logout():void {
    localStorage.removeItem(TOKEN);
    this.router.navigate(['login']);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(TOKEN)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
