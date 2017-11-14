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
const express = require("express");
const bookController_1 = require("../controllers/bookController");
exports.bookRouter = express.Router();
let Book = require('../models/Book.model');
let ctrl = new bookController_1.BookController();
exports.bookRouter.get('/book', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let books = yield ctrl.getBooks();
        res.status(200).json(books);
        console.log(books);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.bookRouter.get('/book/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let bookId = req.params.id;
        let book = yield ctrl.getOneBook(bookId);
        console.log(book);
        res.status(200).json(book);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.bookRouter.post('/book', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let book = {
            title: req.body.title,
            category: req.body.category,
            author: req.body.author,
            cantity: req.body.cantity,
            image: req.body.image,
            date: req.body.date,
            specifications: req.body.specifications
        };
        yield ctrl.createNewBook(book);
        res.status(200).json(book);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));

//# sourceMappingURL=bookRoute.js.map
