import React, { createContext, useState, FC } from "react";
import { TodosContextState } from "./types";

const contextDefaultValues: TodosContextState = {
  todos: [],
  addTodo: () => { },
  deleteTodo: () => { },
  editTodo: () => { }
};

export const TodosContext = createContext<TodosContextState>(
  contextDefaultValues
);

const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);
  const [editItem, setEditItem] = useState<Number>()

  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);
  const deleteTodo = (i: number) => {
    const updatevalue = todos.filter((elem, id) => {
      return i != id;
    })
    setTodos(updatevalue)
  }
  const editTodo = (i: number) => {
    const item = todos.map((elem, id) => {

      if (id === i) {
        elem = "string change"
      }
      return elem;
    })
    setTodos(item)
  }
  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;