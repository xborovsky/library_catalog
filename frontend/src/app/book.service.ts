import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

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
            books.push(new Book(book.id, book.title, book.pageCount, book.ISBN, book.checkedOut));
          });
          return books;
      });
  }

  addBook(book : Book) : Observable<number> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(ENDPOINT_URL + '/book/add', JSON.stringify(book), options)
      .map((res : Response) => { return 200; });
  }

  getBook(id : number) : Observable<Book> {
    return this.http.get(ENDPOINT_URL + '/book/' + id)
      .map((res : Response) => {
        var book = res.json();
        return new Book(book.id, book.title, book.pageCount, book.ISBN, book.checkedOut);
      });
  }

  updateBook(book : Book) : Observable<number> {
    console.log(book);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(ENDPOINT_URL + '/book/edit', book, options)
      .map((res : Response) => { return 200; });
  }

  deleteBook(id : number) : Observable<number> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(ENDPOINT_URL + '/book/delete', id, options)
      .map((res : Response) => { return 200; });
  }

}
