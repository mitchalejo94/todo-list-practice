import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  //Every time our todos change we call this function. Taking our todos and storing them inside of local storage.
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  });

  function addTodo(title) {
    //his block of code handles the submission of a new todo item in a todo list application. It adds the new item to the list of todos, updates the todos state, and resets the newItem state to clear the input field for adding subsequent items.
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  //DELETE TODO
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header"> To do list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
