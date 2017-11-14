import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book-details/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookService } from './services/book.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
