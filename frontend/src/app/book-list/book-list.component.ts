import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Router } from '@angular/router';

import { BookService } from '.././book.service';
import { Book } from '.././book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  observableBooks : Observable<Book[]>;
  errorMessage : string;

  constructor(private bookService : BookService, private router : Router) { }

  ngOnInit() {
    this.observableBooks = this.bookService.getAllBooks()
      .catch((err : any) => {
        this.router.navigate(['error'], { queryParams: {errCode : err.status, message : err.statusText} });
        return Observable.empty();
      });
  }

}
