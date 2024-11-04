
import  { useState } from "react";
// eslint-disable-next-line react/prop-types
function TodoItem({ todo, toggle, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  // eslint-disable-next-line react/prop-types
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    // eslint-disable-next-line react/prop-types
    <li className={todo.completed ? "completed" : ""}>
      <input
        type="checkbox"
        // eslint-disable-next-line react/prop-types
        checked={todo.completed}
        onChange={toggle}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        // eslint-disable-next-line react/prop-types
        <span onDoubleClick={handleEdit}>{todo.text}</span>
      )}
      <button onClick={handleEdit}  >{isEditing ? "Save" : "Edit"}</button>
      <button onClick={deleteTodo}  >Delete</button>
    </li>
  );
}

export default TodoItem;
