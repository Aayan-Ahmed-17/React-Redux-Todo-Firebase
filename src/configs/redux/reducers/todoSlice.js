import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        title: action.payload,
        id: nanoid()
      })
    },
    delTodo: (state, action) => {
        state.todos.id
    },
  },
});
console.log(todoSlice.actions.addTodo);
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer
