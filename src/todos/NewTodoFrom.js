import React, { useState } from "react";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState(" ");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e)}
      />
      <button>Create todo</button>
    </div>
  );
};

export default NewTodoForm;
