"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('server is loading ...');
// do not use this because you will not get auto completion const express = require('express');
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(express_1.default.json());
const PORT = 8080;
app.use('/todos', todos_1.default);
app.listen(PORT, () => console.log(`server is listening on port : ${PORT}`));
