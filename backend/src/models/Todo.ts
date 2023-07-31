// backend/src/models/Todo.ts
import mongoose from "mongoose";

export interface Todo {
  title: string;
  completed: boolean;
}

const todoSchema = new mongoose.Schema<Todo>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const TodoModel = mongoose.model<Todo>("Todo", todoSchema);
