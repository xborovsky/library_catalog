import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { BookService } from './book.service';
import { BookFormComponent } from './book-form/book-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
