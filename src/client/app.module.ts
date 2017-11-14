import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book-details/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookService } from './services/book.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    BookComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
