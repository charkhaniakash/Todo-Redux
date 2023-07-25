import React, { useState } from "react";

import { createTodo } from "./actions";
import { connect } from "react-redux";


const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText =
            todos.some(todo => todo.text === inputValue);
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >Create todo</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: text => dispatch(createTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
