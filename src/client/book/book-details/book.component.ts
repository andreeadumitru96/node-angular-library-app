
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from './book';
import { BookService } from '../../services/book.service';
import { BookListComponent } from '../book-list/book-list.component';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'], 
  providers: [ BookService, BookComponent ]
})
export class BookComponent implements OnInit{
    book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {

    this.route.paramMap
    .switchMap((params: ParamMap) => this.bookService.getBook(params.get('id')))
    .subscribe(book => this.book = book);
  }

  goBack(){
    this.location.back();
  }

}
