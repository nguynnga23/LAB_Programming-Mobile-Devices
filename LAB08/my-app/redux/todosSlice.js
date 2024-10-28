import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: '1', job: 'To check email' },
      { id: '2', job: 'UI task web page' },
      { id: '3', job: 'Learn javascript basic' },
      { id: '4', job: 'Learn HTML Advance' },
      { id: '5', job: 'Medical App UI' },
      { id: '6', job: 'Learn Java' },
      { id: '7', job: 'Learn Java' },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, job } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) {
        todo.job = job;
      }
    },
  },
});

export const { addTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
