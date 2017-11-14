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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const book_service_1 = require("../../services/book.service");
require("rxjs/add/operator/switchMap");
let BookComponent = BookComponent_1 = class BookComponent {
    constructor(bookService, route, location) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.paramMap
            .switchMap((params) => this.bookService.getBook(params.get('id')))
            .subscribe(book => this.book = book);
    }
    goBack() {
        this.location.back();
    }
};
BookComponent = BookComponent_1 = __decorate([
    core_1.Component({
        selector: 'book',
        templateUrl: './book.component.html',
        styleUrls: ['./book.component.css'],
        providers: [book_service_1.BookService, BookComponent_1]
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        router_1.ActivatedRoute,
        common_1.Location])
], BookComponent);
exports.BookComponent = BookComponent;
var BookComponent_1;

//# sourceMappingURL=book.component.js.map
