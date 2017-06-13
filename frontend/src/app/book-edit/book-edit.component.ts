import { Component, OnInit } from '@angular/core';

import { Book } from './../book';
import { BookService } from './../book.service';

import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book:Book;
  err : boolean = false;
  errMessage : string = 'Could not edit book!';
  errMessageDescription : string;

  constructor(private bookService : BookService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params : Params) => this.bookService.getBook(+params['id']))
      .subscribe(
        book => this.book = book,
        err => {
          this.router.navigate(['error'], { queryParams: {errCode : err.status, message : err.statusText} });
          return Observable.empty();
        }
      );
  }

  onSubmit(form:any):void {
    this.bookService.updateBook(new Book(form.value.id, form.value.title, form.value.pageCount, form.value.isbn))
      .subscribe((statusCode : number) => {
        form.reset();
        this.router.navigate(['']);
      }, err => {
        this.err = true;
        this.errMessageDescription = err.status + ': ' + err.statusText;
      });
  }

}
