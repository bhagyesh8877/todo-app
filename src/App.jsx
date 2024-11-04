
import  { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { text, completed: false }]);
    }
  };

  const toggleTodoCompletion = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index, newText) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: newText } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Daily Todos ({todos.filter(todo => todo.completed).length}/{todos.length})</h1>
      <TodoInput addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
