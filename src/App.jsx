import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./configs/redux/reducers/todoSlice";

const App = () => {
  const [text, setText] = useState("1st todo");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const handleAddTodo = (e) => {
    if (text.trim()) {
      e.preventDefault()
      dispatch(addTodo(text));
      setText('')
      console.log(todos);
    }
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <button onClick={handleAddTodo}>Add Todo</button>
    </form>
  );
};

export default App;
