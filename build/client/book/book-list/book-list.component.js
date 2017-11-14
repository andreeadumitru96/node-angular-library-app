"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const book_service_1 = require("../../services/book.service");
let BookListComponent = class BookListComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this.title = 'Library';
    }
    ngOnInit() {
        this.getBooks();
    }
    getBooks() {
        this.bookService.getBooks()
            .then(books => {
            this.books = books;
        });
    }
    onSelect(book) {
        this.selectedBook = book;
    }
};
BookListComponent = __decorate([
    core_1.Component({
        selector: 'book-list',
        templateUrl: './book-list.component.html',
        // styleUrls: ['src/client/book/book-list.component.css'],
        providers: [book_service_1.BookService]
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookListComponent);
exports.BookListComponent = BookListComponent;

//# sourceMappingURL=book-list.component.js.map
