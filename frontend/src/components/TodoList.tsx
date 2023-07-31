// frontend/src/components/TodoList.tsx
import React, { useEffect, useState } from "react";
import api from "../api";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await api.get<Todo[]>("/todo");
      setTodos(response.data);
    } catch (error) {
      console.error("Erro ao buscar todos", error);
    }
  };

  const handleCreateTodo = async () => {
    if (newTodo.trim() !== "") {
      try {
        const response = await api.post<Todo>("/todo", {
          title: newTodo,
          completed: false,
        });
        setTodos([...todos, response.data]);
        setNewTodo("");
      } catch (error) {
        console.error("Erro ao criar todo", error);
      }
    }
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title} - {todo.completed ? "Concluído" : "Pendente"}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleCreateTodo}>Adicionar Tarefa</button>
      </div>
    </div>
  );
}

export default TodoList;
