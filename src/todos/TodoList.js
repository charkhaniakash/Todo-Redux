import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoFrom";
import { connect } from "react-redux";
import { markAsRead, removeTodo } from "./actions";
import { displayAlert } from "./thunks";

const TodoList = ({ todos = [] , onRemovePressed , onMarkDown , onDisplayThunk }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos?.map((todo) => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onMarkDown={onMarkDown} onDisplayThunk={onDisplayThunk} />)}
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
  onDisplayThunk : text => dispatch(displayAlert(text))
})



export default connect(mapStoreToProps , mapDispatchToProps)(TodoList);
