import { Component } from '@angular/core';

import {Router} from '@angular/router';

import { BookService } from '.././book.service';
import { Book } from '.././book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  constructor(private router : Router, private bookService : BookService) { }

  onSubmit(form: any) : void {
    form.reset();
    this.router.navigate(['']);
  }

}
