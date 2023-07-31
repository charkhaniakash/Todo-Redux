import React from "react";
import "./TodoListItem.css";
const TodoListItem = ({ todo, onRemovePressed, onMarkDown, onDisplayThunk }) => {
  return (
    <div className="todo-item">
      <div>{todo?.text}</div>
      <div className="button-container">
        {todo.isCompleted
          ? null
          : <button
            onClick={() => onDisplayThunk(todo.text)}
            className="completed-button">Mark As Completed</button>}
        <button className="remove-button" onClick={() => onRemovePressed(todo.text)}>Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
