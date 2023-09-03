import { useState } from "react";



const TodoForm = () => {
  const [toDoText, settoDoText] = useState("");

  const onFormSubmit = () => {

  }

  const onInputChange = (e) => {
    settoDoText (e.target.value);
  }

  return(
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter to-do.."
        className="sinput"
        onChange={onInputChange}
      />
    </form>
  )
}

export default TodoForm;