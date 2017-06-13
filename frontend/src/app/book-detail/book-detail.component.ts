import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Book } from './../book';

import { BookService } from './../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private book:Book;

  constructor(private bookService:BookService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params : Params) => this.bookService.getBook(+params['id']))
      .subscribe(
        book => this.book = book,
        err => {
          this.router.navigate(['error'], { queryParams: {errCode : err.status, message : err.statusText} });
          return Observable.empty();
        });
  }

}
