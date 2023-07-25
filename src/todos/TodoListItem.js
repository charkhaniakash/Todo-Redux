import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <>
      <h3>{todo.text}</h3>
      <div>
        <div>
          <button>mark as complited</button>
          <button>Remove</button>
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
