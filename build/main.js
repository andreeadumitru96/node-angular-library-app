"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const bookRoute_1 = require("./server/routes/bookRoute");
mongoose.connect("mongodb://localhost");
let app = express();
app.use(bodyParser.json());
app.use(bookRoute_1.bookRouter);
app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, './client')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});
const port = 3000;
app.listen(port);
app.on('listening', onListening);
function onListening() {
    console.log(`Listening on port ` + port);
}

//# sourceMappingURL=main.js.map
