import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {

  message : string;
  errorCode : number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((params : Params) => {
       this.errorCode = +params['errCode'];
       this.message = params['message'];
    });
  }

}
