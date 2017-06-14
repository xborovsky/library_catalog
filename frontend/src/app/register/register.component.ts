import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router : Router) { }

  register(form:any):void {
    // TODO validate!

  }

  cancel(form:any):void {
    form.reset();
    this.router.navigate(['/login']);
  }

}
