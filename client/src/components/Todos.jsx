import React from "react";
import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, [])
  return(
    <div>
      <article>
        <ul>
          {
            todos.map(todo => (
              <Todo
                key={todo._id}
                todo={todo}
              />
            ))
          }
        </ul>
      </article>
    </div>
  )
}

export default Todos;