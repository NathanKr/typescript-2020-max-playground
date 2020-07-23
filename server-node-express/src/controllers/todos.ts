import Todo from "../models/todo";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";

const todos: Todo[] = [];

const createNewId = (): string => {
  return uuidv4();
};

export function deleteTodoById(req: Request, res: Response) : void{
  const index = todos.findIndex((it) => it.id == req.params.id);
  if (index == -1) {
    res.sendStatus(404);
  } else {
    todos.splice(index, 1);
    res.sendStatus(200);
  }
}

export function createTodo(req: Request, res: Response) : void {
  const newTodo: Todo = { id: createNewId(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).send(newTodo);
}

export function getTodos(req: Request, res: Response) : void {
  res.send(todos);
}

export function updateTodoById(req: Request, res: Response) : void {
  const index = todos.findIndex((it) => it.id == req.params.id);
  
  if (index == -1) {
    res.sendStatus(404);
  } else {
    todos[index].text = req.body.text;
    res.sendStatus(200);
  }
}