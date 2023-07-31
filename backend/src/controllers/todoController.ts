// backend/src/controllers/todoController.ts
import { Request, Response } from "express";
import { TodoModel, Todo } from "../models/Todo";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar todos", error: err });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo: Todo = req.body;
    const createdTodo = await TodoModel.create(todo);
    res.json(createdTodo);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar todo", error: err });
  }
};
