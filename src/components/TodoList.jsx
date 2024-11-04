

import TodoItem from "./TodoItem";
// eslint-disable-next-line react/prop-types
function TodoList({ todos, toggleTodoCompletion, deleteTodo, editTodo }) {
    
  return (
    
    <ul className="todo-list">
        
        
{todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggle={() => toggleTodoCompletion(index)}
          deleteTodo={() => deleteTodo(index)}
          editTodo={(newText) => editTodo(index, newText)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
