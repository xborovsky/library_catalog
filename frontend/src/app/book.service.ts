import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from './book';

const ENDPOINT_URL = 'http://localhost:1337/localhost:8080/book-library-backend';

@Injectable()
export class BookService {

  constructor(private http : Http) { }

  getAllBooks() : Observable<Book[]> {
    return this.http.get(ENDPOINT_URL + '/book/list-all')
      .map((res : Response) => {
          var books = [];
          res.json().forEach(function(book) {
            books.push(new Book(book.title, book.pageCount, book.isbn, book.checkedOut));
          });
          return books;
      });
  }

  addBook(book : Book) : Observable<number> {
    console.log('add book');
    return this.http.post(ENDPOINT_URL + '/book/add', JSON.stringify(book))
      .map((res : Response) => { return 200; });
  }

}
