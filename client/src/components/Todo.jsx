import React from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Todo = ({todo}) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editTodoText, setEditTodoText] = useState(todo.data);

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing(prevState => !prevState);
    dispatch(updateTodo(todo._id, editTodoText));
  }

  return(
    <li 
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration:  todo.done ? 'line-through' : '',
        color: todo.done ? '#B6666F' : '#388087'
      }}
    >
      <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

      <form
        style={{ display: editing ? 'inline' : 'none' }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={editTodoText}
          className="edit-todo"
          onChange={(e) => setEditTodoText(e.target.value)}
        />
      </form>
      
      <span
        className="icon"
        onClick={() => dispatch(deleteTodo(todo._id))}
      >
        <i className="fas fa-trash" />
      </span>
      
      <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
        <i className="fas fa-pen" />
      </span>
    </li>
  )
}

export default Todo;