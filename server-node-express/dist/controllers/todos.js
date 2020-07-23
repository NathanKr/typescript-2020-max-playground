"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoById = exports.getTodos = exports.createTodo = exports.deleteTodoById = void 0;
const uuid_1 = require("uuid");
const todos = [];
const createNewId = () => {
    return uuid_1.v4();
};
function deleteTodoById(req, res) {
    const index = todos.findIndex((it) => it.id == req.params.id);
    if (index == -1) {
        res.sendStatus(404);
    }
    else {
        todos.splice(index, 1);
        res.sendStatus(200);
    }
}
exports.deleteTodoById = deleteTodoById;
function createTodo(req, res) {
    const newTodo = { id: createNewId(), text: req.body.text };
    todos.push(newTodo);
    res.status(201).send(newTodo);
}
exports.createTodo = createTodo;
function getTodos(req, res) {
    res.send(todos);
}
exports.getTodos = getTodos;
function updateTodoById(req, res) {
    const index = todos.findIndex((it) => it.id == req.params.id);
    if (index == -1) {
        res.sendStatus(404);
    }
    else {
        todos[index].text = req.body.text;
        res.sendStatus(200);
    }
}
exports.updateTodoById = updateTodoById;
