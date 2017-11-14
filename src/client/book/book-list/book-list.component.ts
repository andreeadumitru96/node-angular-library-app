
import { Component, OnInit, Pipe } from '@angular/core';
import { Router }from '@angular/router';

import { Book } from '../book-details/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html', 
  // styleUrls: ['src/client/book/book-list.component.css'],
  providers: [BookService]
})

export class BookListComponent implements OnInit {
  title = 'Library';
  books: Book[];
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  
  getBooks(): void {
     this.bookService.getBooks()
      .then(books => {
        this.books = books
      });
  }
 
  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  
}
