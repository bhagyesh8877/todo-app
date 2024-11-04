
import  { useState } from "react";
// eslint-disable-next-line react/prop-types
function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
