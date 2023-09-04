import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewToDo } from "../redux/actions";



const TodoForm = () => {
  const [toDoText, settoDoText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewToDo(toDoText));
    settoDoText('');
  }

  const onInputChange = (e) => {
    settoDoText(e.target.value);
  }

  return(

<form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter to-do.."
        className="input"
        onChange={onInputChange}
        value={toDoText}
      />
    </form>
  )
}

export default TodoForm;