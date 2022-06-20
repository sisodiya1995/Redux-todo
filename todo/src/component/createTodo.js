import React from "react";

function CreateTodo(props) {
  let { title, isDone, index, deleteTodo, updateTodo } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => updateTodo(index)}
      />
      <p id={isDone && "completed"}> {title}</p>
      <span
        className="close-btn"
        id={index}
        onClick={(e) => deleteTodo(e)}
      >delete</span>
    </li>
  );
}

export default CreateTodo;