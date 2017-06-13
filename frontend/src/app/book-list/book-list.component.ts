import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Router } from '@angular/router';

import { BookService } from '.././book.service';
import { Book } from '.././book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  observableBooks : Observable<Book[]>;
  successMessage : string;

  constructor(private bookService : BookService, private router : Router) { }

  ngOnInit() {
    this.observableBooks = this.loadBooks();
  }

  deleteBook(book:Book):void {
    if (!confirm('Are you sure you want to delete the selected book?')) {
      return;
    }

    this.bookService.deleteBook(book.getId())
      .subscribe(res => {
        this.successMessage = 'Book successfully deleted.';
        this.observableBooks = this.loadBooks();
      }, err => {
        this.router.navigate(['error'], { queryParams: {errCode : err.status, message : err.statusText} });
        return Observable.empty();
      });
  }

  private loadBooks():Observable<Book[]> {
    return this.bookService.getAllBooks()
      .catch((err : any) => {
        this.router.navigate(['error'], { queryParams: {errCode : err.status, message : err.statusText} });
        return Observable.empty();
      });
  }

}
