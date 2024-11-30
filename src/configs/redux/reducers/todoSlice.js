import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: [
    {
          title: "action.payload",
          id: nanoid()
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      // console.log("state, action")
    },
    editTodo: (state, action) => {
      // console.log("state, action")
    },
  },
});
console.log(todoSlice);
export const { addTodo } = todoSlice.actions;
