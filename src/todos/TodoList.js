import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoFrom";
import { connect } from "react-redux";
import { markAsRead, removeTodo } from "./actions";
import { displayAlert, loadTodos } from "./thunks";

const TodoList = ({ todos = [], onRemovePressed, onMarkDown, onDisplayThunk, isLoading, setIsLoading }) => {


  useEffect(() => {
    setIsLoading(isLoading)
  },[])


  const loadingMessage = <div>Loading .....</div>

  const content = (<div className="list-wrapper">
    <NewTodoForm />
    {todos?.map((todo) => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onMarkDown={onMarkDown} onDisplayThunk={onDisplayThunk} />)}
  </div>);

  return isLoading ? loadingMessage : content

}

const mapStoreToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  setIsLoading : () => dispatch(loadTodos()),
  onRemovePressed: text => dispatch(removeTodo(text)),
  onMarkDown: text => dispatch(markAsRead(text)),
  onDisplayThunk: text => dispatch(displayAlert(text))
})



export default connect(mapStoreToProps, mapDispatchToProps)(TodoList);
