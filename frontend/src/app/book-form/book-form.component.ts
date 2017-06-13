import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

import {Router} from '@angular/router';

import { BookService } from '.././book.service';
import { Book } from '.././book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  err : boolean = false;
  errMessage : string = 'Could not add book!';
  errMessageDescription : string;

  constructor(private router : Router, private bookService : BookService) { }

  onSubmit(form: any) : void {
    this.err = false;
    this.bookService.addBook(new Book(null, form.value.title, form.value.pageCount, form.value.isbn))
      .subscribe((statusCode : number) => {
        form.reset();
        this.router.navigate(['']);
      }, err => {
        this.err = true;
        this.errMessageDescription = err.status + ': ' + err.statusText;
      });
  }

}
