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
    editTodo: (state, action) => {
    },
  },
});
console.log(todoSlice.actions.addTodo);
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer
