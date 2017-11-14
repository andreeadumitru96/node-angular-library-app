"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var Book = require("../models/Book.model");
class BookController {
    createNewBook(newBook) {
        return __awaiter(this, void 0, void 0, function* () {
            let book = new Book(newBook);
            yield book.save();
        });
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Book.find({}).exec();
        });
    }
    getOneBook(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Book.findOne({ _id: bookId }).exec();
        });
    }
}
exports.BookController = BookController;

//# sourceMappingURL=bookController.js.map
