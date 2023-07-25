import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoFrom";
import { connect } from "react-redux";
import { markAsRead, removeTodo } from "./actions";

const TodoList = ({ todos = [] , onRemovePressed , onMarkDown }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onMarkDown={onMarkDown} />)}
    </div>
  );
};

const mapStoreToProps = state =>({
  todos : state.todos,
}
)
const mapDispatchToProps = dispatch =>({
  onRemovePressed : text =>dispatch(removeTodo(text)),
  onMarkDown: text => dispatch(markAsRead(text)),
})



export default connect(mapStoreToProps , mapDispatchToProps)(TodoList);
