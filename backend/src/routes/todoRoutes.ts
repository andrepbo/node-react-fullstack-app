// backend/src/routes/todoRoutes.ts
import express from "express";
import { getTodos, createTodo } from "../controllers/todoController";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);

export { router as todoRoutes };
