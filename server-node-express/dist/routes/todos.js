"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosController = __importStar(require("../controllers/todos"));
const router = express_1.Router();
router.delete("/:id", (req, res) => {
    todosController.deleteTodoById(req, res);
});
router.get('/', (req, res) => {
    todosController.getTodos(req, res);
});
router.post('/', (req, res) => {
    todosController.createTodo(req, res);
});
router.patch('/:id', (req, res) => {
    todosController.updateTodoById(req, res);
});
exports.default = router;
